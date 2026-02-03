/**
 * Input Component
 * Yeniden kullanılabilir input bileşeni
 */
export default function Input({
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-gray-400">{label}</label>
      )}
      <input
        className={`
          px-4 py-3 rounded-xl
          bg-slate-800/50 text-white
          border border-slate-600
          focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20
          transition-all placeholder-gray-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-400">{error}</span>
      )}
    </div>
  );
}
