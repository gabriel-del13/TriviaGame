import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionsByCategory, getRandomQuestions } from '../utils/api';
import { shuffleOptions, GAME_MODE_CONFIG, GAME_MODES } from '../utils/gameUtils';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Timer from '../components/ui/Timer';
import Watermark from '../components/Watermark';

export default function Game() {
  const { mode, categoryId, questionLimit, difficulty } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lives, setLives] = useState(null);
  const [startTime] = useState(Date.now());
  
  // Validate mode and set initial state
  const gameConfig = mode ? GAME_MODE_CONFIG[mode] : null;
  const isLivesMode = mode === GAME_MODES.LIVES;
  const isProgressiveMode = mode === GAME_MODES.PROGRESSIVE;
  const limit = questionLimit === 'unlimited' ? null : parseInt(questionLimit) || 10;
  const selectedDifficulty = difficulty && ['easy', 'medium', 'hard'].includes(difficulty) ? difficulty : null;

  // Set lives if mode is valid
  useEffect(() => {
    if (gameConfig?.lives !== undefined) {
      setLives(gameConfig.lives);
    }
  }, [gameConfig]);

  const loadQuestions = useCallback(async (questionCount = 10) => {
    try {
      setLoading(true);
      setError(null);
      let response;
      
      if (categoryId === 'all') {
        response = await getRandomQuestions(questionCount, selectedDifficulty);
      } else {
        response = await getQuestionsByCategory(categoryId, questionCount, selectedDifficulty);
      }
      
      // Check if response has data (backend returns array directly, so response.data is the array)
      if (!response || !response.data || !Array.isArray(response.data) || response.data.length === 0) {
        setError('No questions found for this category.');
        setLoading(false);
        return;
      }
      
      // Parse options if they come as strings (JSONB from PostgreSQL)
      let loadedQuestions = response.data.map(q => {
        try {
          return {
            ...q,
            options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options
          };
        } catch (parseErr) {
          console.error('Error parsing question options:', parseErr, q);
          return q;
        }
      });
      
      // Validate that all questions match the selected difficulty (if one is selected)
      if (selectedDifficulty) {
        const filteredQuestions = loadedQuestions.filter(q => q.difficulty === selectedDifficulty);
        if (filteredQuestions.length === 0) {
          setError(`No ${selectedDifficulty} difficulty questions found for this category.`);
          setLoading(false);
          return;
        }
        // If some questions don't match, use only the matching ones and log a warning
        if (filteredQuestions.length < loadedQuestions.length) {
          console.warn(`Warning: Some questions didn't match difficulty filter. Expected ${selectedDifficulty}, got:`, 
            loadedQuestions.map(q => q.difficulty));
          loadedQuestions = filteredQuestions;
        }
      }
      
      // Sort by difficulty for progressive mode (only if no specific difficulty is selected)
      if (isProgressiveMode && !selectedDifficulty) {
        const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
        loadedQuestions.sort((a, b) => {
          const diffA = difficultyOrder[a.difficulty] || 2;
          const diffB = difficultyOrder[b.difficulty] || 2;
          return diffA - diffB;
        });
      }
      
      setQuestions(loadedQuestions);
    } catch (err) {
      console.error('Error loading questions:', err);
      setError(`Error loading questions: ${err.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  }, [categoryId, isProgressiveMode, selectedDifficulty]);

  const loadMoreQuestions = useCallback(async () => {
    try {
      let response;
      const loadCount = 10;
      
      if (categoryId === 'all') {
        response = await getRandomQuestions(loadCount, selectedDifficulty);
      } else {
        response = await getQuestionsByCategory(categoryId, loadCount, selectedDifficulty);
      }
      
      const newQuestions = response.data.map(q => ({
        ...q,
        options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options
      }));
      
      // Avoid duplicates by checking if we already have enough questions
      setQuestions(prev => {
        const existingIds = new Set(prev.map(q => q.id));
        const uniqueNewQuestions = newQuestions.filter(q => !existingIds.has(q.id));
        return [...prev, ...uniqueNewQuestions];
      });
    } catch (err) {
      console.error('Error loading more questions:', err);
    }
  }, [categoryId, selectedDifficulty]);

  useEffect(() => {
    loadQuestions(limit || 10);
  }, [categoryId, limit, loadQuestions]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const shuffled = shuffleOptions(currentQuestion.options, currentQuestion.correct_index);
      setShuffledOptions(shuffled.options);
      setCorrectIndex(shuffled.correctIndex);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    // Load more questions when approaching the end (for unlimited modes)
    if (isLivesMode && questions.length > 0 && currentQuestionIndex >= questions.length - 3) {
      loadMoreQuestions();
    }
  }, [currentQuestionIndex, questions.length, isLivesMode, loadMoreQuestions]);

  const handleAnswerSelect = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    const isCorrectAnswer = index === correctIndex;
    
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswer = {
      question: currentQuestion.question,
      selected: index,
      correct: correctIndex,
      isCorrect: isCorrectAnswer
    };
    
    if (isCorrectAnswer) {
      setScore(prevScore => prevScore + 1);
    } else if (isLivesMode) {
      // Lose a life for wrong answer
      setLives(prevLives => {
        const newLives = prevLives - 1;
        if (newLives <= 0) {
          // Game over - navigate to results after a short delay
          const totalTime = Math.floor((Date.now() - startTime) / 1000);
          setTimeout(() => {
            navigate('/results', {
              state: {
                score,
                total: currentQuestionIndex + 1,
                answers: [...answers, newAnswer],
                mode,
                gameOver: true,
                totalTime,
                categoryId,
                questionLimit,
                difficulty
              }
            });
          }, 2000);
        }
        return newLives;
      });
    }
    
    setAnswers(prevAnswers => [...prevAnswers, newAnswer]);
  };

  const handleNext = () => {
    // Check if game is over in lives mode
    if (isLivesMode && lives <= 0) {
      return;
    }

    if (limit && currentQuestionIndex < limit - 1 && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (!limit && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Game finished
      const totalTime = Math.floor((Date.now() - startTime) / 1000);
      navigate('/results', {
        state: {
          score,
          total: limit || currentQuestionIndex + 1,
          answers,
          mode,
          totalTime,
          categoryId,
          questionLimit,
          difficulty
        }
      });
    }
  };

  const handleTimeUp = () => {
    if (!isAnswered) {
      handleAnswerSelect(-1); // No answer selected
    }
  };

  // Validate mode early
  if (!mode || !gameConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto">
          <div className="text-center">
            <div className="text-red-600 text-3xl sm:text-4xl mb-3 sm:mb-4">⚠️</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">Invalid Game Mode</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2">The selected game mode does not exist.</p>
            <Button onClick={() => navigate('/')} className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Back to Home</Button>
          </div>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 flex items-center justify-center p-4">
        <div className="text-white text-lg sm:text-2xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto">
          <div className="text-center">
            <div className="text-red-600 text-3xl sm:text-4xl mb-3 sm:mb-4">⚠️</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">Error</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 break-words">{error}</p>
            <Button onClick={() => navigate('/')} className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Back to Home</Button>
          </div>
        </Card>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto">
          <div className="text-center">
            <div className="text-gray-600 text-3xl sm:text-4xl mb-3 sm:mb-4">📭</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">No Questions</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2">No questions found for this category.</p>
            <Button onClick={() => navigate('/')} className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Back to Home</Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = limit || questions.length;
  const progress = limit 
    ? ((currentQuestionIndex + 1) / totalQuestions) * 100 
    : ((currentQuestionIndex + 1) / Math.max(currentQuestionIndex + 1, questions.length)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-2 sm:p-4">
      <div className="max-w-3xl mx-auto py-3 sm:py-4 md:py-5 lg:py-6">
        {/* Header */}
        <div className="mb-3 sm:mb-4 md:mb-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3 md:mb-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="bg-white/10 border-white text-white hover:bg-white/20 text-sm sm:text-base px-3 sm:px-6 py-2 sm:py-3"
            >
              ← Exit
            </Button>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              {isLivesMode && (
                <div className="flex items-center gap-1 sm:gap-2 text-white">
                  <span className="text-xl sm:text-2xl">❤️</span>
                  <span className="font-semibold text-lg sm:text-xl">{lives}</span>
                </div>
              )}
              <div className="text-white font-semibold text-sm sm:text-base">
                Question {currentQuestionIndex + 1} {limit ? `of ${totalQuestions}` : ''}
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-3 sm:mb-4 md:mb-5">
          <div className="mb-3 sm:mb-4 md:mb-5">
            {gameConfig?.timeLimit && (
              <Timer 
                key={currentQuestionIndex}
                timeLimit={gameConfig.timeLimit} 
                onTimeUp={handleTimeUp}
                isPaused={isAnswered}
              />
            )}
          </div>
          
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 leading-relaxed break-words">
            {currentQuestion.question}
          </h2>

          <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
            {shuffledOptions.map((option, index) => {
              let buttonClass = '';
              if (isAnswered) {
                if (index === correctIndex) {
                  buttonClass = 'bg-emerald-500 hover:bg-emerald-600 text-white';
                } else if (index === selectedAnswer && index !== correctIndex) {
                  buttonClass = 'bg-rose-500 hover:bg-rose-600 text-white';
                } else {
                  buttonClass = 'bg-gray-200 hover:bg-gray-300 text-gray-700';
                }
              } else {
                buttonClass = selectedAnswer === index 
                  ? 'bg-indigo-500 hover:bg-indigo-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={`w-full p-3 sm:p-3.5 md:p-4 rounded-lg font-semibold text-left transition-all duration-200 text-sm sm:text-base leading-relaxed break-words ${buttonClass} ${
                    isAnswered ? 'cursor-default' : 'cursor-pointer active:scale-95'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-3 sm:mt-4 md:mt-5">
              {isLivesMode && lives <= 0 ? (
                <div className="text-center">
                  <p className="text-red-600 font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 px-2">Game Over! You ran out of lives.</p>
                  <Button 
                    onClick={() => {
                      const totalTime = Math.floor((Date.now() - startTime) / 1000);
                      navigate('/results', {
                        state: {
                          score,
                          total: currentQuestionIndex + 1,
                          answers,
                          mode,
                          gameOver: true,
                          totalTime,
                          categoryId,
                          questionLimit,
                          difficulty
                        }
                      });
                    }}
                    className="w-full text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                    variant="primary"
                  >
                    View Results
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={handleNext}
                  className="w-full text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                  variant="primary"
                >
                  {(!limit && currentQuestionIndex < questions.length - 1) || 
                   (limit && currentQuestionIndex < limit - 1 && currentQuestionIndex < questions.length - 1)
                    ? 'Next' 
                    : 'View Results'}
                </Button>
              )}
            </div>
          )}
        </Card>

        <Watermark />
      </div>
    </div>
  );
}

