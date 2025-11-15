import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { GAME_MODES, GAME_MODE_CONFIG } from '../utils/gameUtils';
import Watermark from '../components/Watermark';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            🎯 Trivia Game
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 px-2">Choose your game mode and test your knowledge!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {Object.entries(GAME_MODE_CONFIG).map(([mode, config]) => (
            <Card 
              key={mode}
              onClick={() => navigate(`/select-category/${mode}`)}
              className="hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{config.icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 px-2">
                  {config.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base px-2">{config.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center px-2">
          <Button 
            variant="outline" 
            onClick={() => navigate('/admin')}
            className="bg-white/10 border-white text-white hover:bg-white/20 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            Admin Panel
          </Button>
        </div>

        <Watermark />
      </div>
    </div>
  );
}