/**
 * useNotification Hook
 * Bildirim yönetimi için custom hook
 */
import { useState, useCallback } from 'react';
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES } from '../constants';

export function useNotification() {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message, type = NOTIFICATION_TYPES.SUCCESS) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), NOTIFICATION_DURATION);
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  const showSuccess = useCallback((message) => {
    showNotification(message, NOTIFICATION_TYPES.SUCCESS);
  }, [showNotification]);

  const showError = useCallback((message) => {
    showNotification(message, NOTIFICATION_TYPES.ERROR);
  }, [showNotification]);

  const showInfo = useCallback((message) => {
    showNotification(message, NOTIFICATION_TYPES.INFO);
  }, [showNotification]);

  return {
    notification,
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showInfo,
  };
}
