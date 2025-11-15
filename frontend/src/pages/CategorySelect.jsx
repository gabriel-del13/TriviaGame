import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategories } from '../utils/api';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { GAME_MODE_CONFIG, GAME_MODES } from '../utils/gameUtils';
import Watermark from '../components/Watermark';

export default function CategorySelect() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionLimit, setQuestionLimit] = useState(10);
  const [difficulty, setDifficulty] = useState('all');
  const gameConfig = GAME_MODE_CONFIG[mode];
  const showQuestionLimit = gameConfig?.allowsQuestionLimit;
  const showDifficultySelector = mode === GAME_MODES.UNTIMED || mode === GAME_MODES.TIMED || mode === GAME_MODES.LIVES;

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getCategories();
      // Add "All" category
      setCategories([
        { id: 'all', name: 'All Categories', slug: 'all' },
        ...response.data
      ]);
    } catch (error) {
      console.error('Error loading categories:', error);
      setError('Error loading categories. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const startGame = (categoryId) => {
    const limit = showQuestionLimit ? questionLimit : 'unlimited';
    const difficultyParam = showDifficultySelector && difficulty !== 'all' ? `/${difficulty}` : '';
    navigate(`/game/${mode}/${categoryId}/${limit}${difficultyParam}`);
  };

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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Button onClick={() => navigate('/')} className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">Back to Home</Button>
              <Button onClick={loadCategories} variant="primary" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">Retry</Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-4 sm:mb-6 bg-white/10 border-white text-white hover:bg-white/20 text-sm sm:text-base px-3 sm:px-6 py-2 sm:py-3"
        >
          ← Back
        </Button>

        <div className="text-center mb-6 sm:mb-8">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{gameConfig?.icon}</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 px-2">
            {gameConfig?.name}
          </h1>
          <p className="text-white/90 text-sm sm:text-base px-2">{gameConfig?.description}</p>
        </div>

        {showQuestionLimit && (
          <Card className="mb-4 sm:mb-6">
            <div className="text-center">
              <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 px-2">
                Number of Questions
              </label>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <Button
                  onClick={() => setQuestionLimit(Math.max(5, questionLimit - 5))}
                  variant="outline"
                  className="px-3 sm:px-4 text-sm sm:text-base py-2 sm:py-3"
                  disabled={questionLimit <= 5}
                >
                  -
                </Button>
                <div className="text-xl sm:text-2xl font-bold text-gray-800 min-w-[50px] sm:min-w-[60px]">
                  {questionLimit}
                </div>
                <Button
                  onClick={() => setQuestionLimit(Math.min(30, questionLimit + 5))}
                  variant="outline"
                  className="px-3 sm:px-4 text-sm sm:text-base py-2 sm:py-3"
                  disabled={questionLimit >= 30}
                >
                  +
                </Button>
              </div>
            </div>
          </Card>
        )}

        {showDifficultySelector && (
          <Card className="mb-4 sm:mb-6">
            <div className="text-center">
              <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 px-2">
                Difficulty Level
              </label>
              <div className="flex items-center justify-center gap-2 flex-wrap px-2">
                {['all', 'easy', 'medium', 'hard'].map((diff) => (
                  <Button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    variant={difficulty === diff ? 'primary' : 'outline'}
                    className="px-3 sm:px-4 capitalize text-sm sm:text-base py-2 sm:py-3"
                  >
                    {diff === 'all' ? 'All Levels' : diff}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Separador y título para categorías */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex-1 h-px bg-white/30"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white px-2 sm:px-3 whitespace-nowrap">
              📚 Select Category
            </h2>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              onClick={() => startGame(category.id)}
              className="hover:scale-105 transition-transform text-center cursor-pointer border-2 border-indigo-200 hover:border-indigo-300 bg-gradient-to-br from-white to-indigo-50"
            >
              <div className="flex items-center justify-between p-3 sm:p-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 flex-1 break-words pr-2">{category.name}</h3>
                {showQuestionLimit && (
                  <span className="ml-2 text-xs sm:text-sm font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded flex-shrink-0">
                    {questionLimit}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Watermark />
      </div>
    </div>
  );
}