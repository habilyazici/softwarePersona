/**
 * Global hata yakalama middleware'i
 */
import config from '../config/index.js';

// 404 Not Found handler
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint bulunamadı',
    path: req.originalUrl,
  });
};

// Global error handler
export const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${new Date().toISOString()}:`, err.message);

  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Sunucu hatası',
    ...(config.server.isDev && { stack: err.stack }),
  });
};

// Async handler wrapper - try-catch yazmayı önler
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
