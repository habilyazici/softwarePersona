/**
 * useLocalStorage Hook
 * LocalStorage ile senkronize state yönetimi
 */
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // State'i localStorage'dan veya initial value'dan başlat
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // State değiştiğinde localStorage'ı güncelle
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
