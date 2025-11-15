import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { GAME_MODE_CONFIG, GAME_MODES } from '../utils/gameUtils';
import Watermark from '../components/Watermark';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, answers, mode, totalTime, categoryId, questionLimit, difficulty } = location.state || {};
  const [wrongQuestions, setWrongQuestions] = useState([]);

  useEffect(() => {
    if (!location.state) {
      navigate('/');
      return;
    }

    // Get wrong answers for lives mode
    if (mode === GAME_MODES.LIVES && answers) {
      const wrong = answers.filter(a => !a.isCorrect).slice(0, 3);
      setWrongQuestions(wrong);
    }
  }, [location.state, mode, answers, navigate]);

  if (!location.state) {
    return null;
  }

  const gameConfig = GAME_MODE_CONFIG[mode];
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const isLivesMode = mode === GAME_MODES.LIVES;
  
  // Determine color based on percentage (50% threshold)
  const getColorClasses = () => {
    if (percentage <= 50) {
      return {
        circle: 'text-amber-500',
        text: 'text-amber-600'
      };
    }
    return {
      circle: 'text-emerald-500',
      text: 'text-emerald-600'
    };
  };

  const colorClasses = getColorClasses();
  const circumference = 2 * Math.PI * 90; // radius = 90
  const offset = circumference - (percentage / 100) * circumference;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) {
      return `${mins}m ${secs}s`;
    }
    return `${secs}s`;
  };

  const handleRetry = () => {
    const limit = questionLimit === 'unlimited' ? 'unlimited' : questionLimit;
    const difficultyParam = difficulty && difficulty !== 'all' ? `/${difficulty}` : '';
    navigate(`/game/${mode}/${categoryId}/${limit}${difficultyParam}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-2 sm:p-4">
      <div className="max-w-3xl mx-auto py-4 sm:py-6 md:py-8">
        <Card className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-5xl sm:text-6xl mb-4">{gameConfig?.icon}</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Game Results
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              {gameConfig?.name}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Total Time */}
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">
                {totalTime ? formatTime(totalTime) : '0s'}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Total Time</div>
            </div>

            {/* Total Questions */}
            <div className="bg-slate-100 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-600 mb-1">
                {total || 0}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Total Questions</div>
            </div>

            {/* Correct Answers */}
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">
                {score || 0}
              </div>
              <div className="text-sm sm:text-base text-gray-600">Correct Answers</div>
            </div>
          </div>

          {/* Circular Progress Chart */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="currentColor"
                  strokeWidth="20"
                  fill="transparent"
                  className="text-gray-200"
                />
                {/* Progress circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="currentColor"
                  strokeWidth="20"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className={`${colorClasses.circle} transition-all duration-500`}
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colorClasses.text}`}>
                    {percentage}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wrong Questions (Lives Mode Only) */}
          {isLivesMode && wrongQuestions.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                Questions You Got Wrong
              </h2>
              <div className="space-y-3">
                {wrongQuestions.map((answer, index) => (
                  <div
                    key={index}
                    className="bg-rose-50 border-l-4 border-rose-400 p-3 sm:p-4 rounded"
                  >
                    <div className="text-sm sm:text-base text-gray-700 font-medium">
                      {answer.question}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="flex-1 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Back to Home
            </Button>
            <Button
              onClick={handleRetry}
              variant="primary"
              className="flex-1 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Try Again
            </Button>
          </div>
        </Card>

        <Watermark />
      </div>
    </div>
  );
}

