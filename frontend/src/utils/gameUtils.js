// Shuffle array
export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Shuffle options and track correct answer
  export const shuffleOptions = (options, correctIndex) => {
    const optionsWithIndex = options.map((option, index) => ({
      option,
      originalIndex: index
    }));
    
    const shuffled = shuffleArray(optionsWithIndex);
    const newCorrectIndex = shuffled.findIndex(item => item.originalIndex === correctIndex);
    
    return {
      options: shuffled.map(item => item.option),
      correctIndex: newCorrectIndex
    };
  };
  
  // Game modes
  export const GAME_MODES = {
    TIMED: 'timed',
    UNTIMED: 'untimed',
    PROGRESSIVE: 'progressive',
    LIVES: 'lives'
  };
  
  export const GAME_MODE_CONFIG = {
    [GAME_MODES.TIMED]: {
      name: 'Timed Challenge',
      description: '10 seconds per question',
      icon: '⏱️',
      timeLimit: 10,
      allowsQuestionLimit: true
    },
    [GAME_MODES.UNTIMED]: {
      name: 'No Time Limit',
      description: 'Take your time',
      icon: '♾️',
      timeLimit: null,
      allowsQuestionLimit: true
    },
    [GAME_MODES.PROGRESSIVE]: {
      name: 'Progressive Difficulty',
      description: 'Questions get harder as you progress',
      icon: '📈',
      timeLimit: null,
      allowsQuestionLimit: true
    },
    [GAME_MODES.LIVES]: {
      name: 'Lives Mode',
      description: '3 lives, unlimited questions',
      icon: '❤️',
      timeLimit: null,
      lives: 3,
      allowsQuestionLimit: false
    }
  };