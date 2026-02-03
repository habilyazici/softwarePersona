/**
 * EmptyState Component
 * Boş durum gösterimi
 */
export default function EmptyState({ 
  icon = '🎥', 
  title = 'Veri bulunamadı',
  description = '',
  action = null,
}) {
  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">{icon}</div>
      <p className="text-gray-400 text-lg">{title}</p>
      {description && (
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      )}
      {action && (
        <div className="mt-4">{action}</div>
      )}
    </div>
  );
}
