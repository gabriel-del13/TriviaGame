import { useEffect, useState } from 'react';

export default function Timer({ timeLimit, onTimeUp, isPaused }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setTimeLeft(timeLimit);
  }, [timeLimit]);

  useEffect(() => {
    if (isPaused || timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isPaused, onTimeUp]);

  const percentage = (timeLeft / timeLimit) * 100;
  const isLow = timeLeft <= 5;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
        <span className="text-xs sm:text-sm font-medium text-gray-600">Time Left</span>
        <span className={`text-lg sm:text-xl md:text-2xl font-bold ${isLow ? 'text-rose-500 animate-pulse' : 'text-indigo-500'}`}>
          {timeLeft}s
        </span>
      </div>
      <div className="w-full h-2 sm:h-2.5 md:h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${isLow ? 'bg-rose-500' : 'bg-indigo-500'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}