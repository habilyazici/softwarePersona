/**
 * Spinner Component
 * Loading spinner bileşeni
 */
export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-6 w-6 border-2',
    md: 'h-12 w-12 border-4',
    lg: 'h-16 w-16 border-4',
  };

  return (
    <div
      className={`
        animate-spin rounded-full
        border-purple-500 border-t-transparent
        ${sizes[size]}
        ${className}
      `}
    />
  );
}
