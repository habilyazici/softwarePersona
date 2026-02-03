/**
 * Notification Component
 * Bildirim bileşeni
 */
import { NOTIFICATION_TYPES } from '../../constants';

const styles = {
  [NOTIFICATION_TYPES.SUCCESS]: 'bg-green-500/90 text-white',
  [NOTIFICATION_TYPES.ERROR]: 'bg-red-500/90 text-white',
  [NOTIFICATION_TYPES.INFO]: 'bg-blue-500/90 text-white',
  [NOTIFICATION_TYPES.WARNING]: 'bg-yellow-500/90 text-black',
};

export default function Notification({ notification, onClose }) {
  if (!notification) return null;

  return (
    <div
      className={`
        fixed top-4 right-4 z-50
        px-6 py-3 rounded-lg shadow-lg
        animate-fade-in
        flex items-center gap-3
        ${styles[notification.type] || styles.success}
      `}
    >
      <span>{notification.message}</span>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-2 hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
      )}
    </div>
  );
}
