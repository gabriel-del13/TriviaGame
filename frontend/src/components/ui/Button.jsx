export default function Button({ children, variant = 'primary', onClick, disabled, className = '' }) {
    const baseStyle = 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base';
    
    const variants = {
      primary: 'bg-indigo-500 hover:bg-indigo-600 text-white active:scale-95',
      secondary: 'bg-slate-500 hover:bg-slate-600 text-white active:scale-95',
      success: 'bg-emerald-500 hover:bg-emerald-600 text-white active:scale-95',
      danger: 'bg-rose-500 hover:bg-rose-600 text-white active:scale-95',
      outline: 'border-2 border-indigo-400 text-indigo-600 hover:bg-indigo-50 active:scale-95'
    };
    
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }