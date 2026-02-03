/**
 * Uygulama sabitleri
 */

// API URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Film endpoint'leri
export const ENDPOINTS = {
  FILMS: `${API_BASE_URL}/films`,
  FILM_STATS: `${API_BASE_URL}/films/stats`,
  HEALTH: `${API_BASE_URL}/health`,
};

// Yıl limitleri
export const YEAR_LIMITS = {
  MIN: 1888, // İlk film yapılan yıl
  MAX: new Date().getFullYear() + 5,
};

// Bildirim tipleri
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
};

// Bildirim süreleri (ms)
export const NOTIFICATION_DURATION = 3000;
