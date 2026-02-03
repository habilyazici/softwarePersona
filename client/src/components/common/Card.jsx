/**
 * Card Component
 * Yeniden kullanılabilir kart bileşeni
 */
export default function Card({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl
        border border-white/10
        ${hover ? 'hover:border-purple-500/30 transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
