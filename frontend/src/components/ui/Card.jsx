export default function Card({ children, className = '', onClick }) {
    return (
      <div 
        onClick={onClick}
        className={`bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-5 lg:p-6 ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''} ${className}`}
      >
        {children}
      </div>
    );
  }