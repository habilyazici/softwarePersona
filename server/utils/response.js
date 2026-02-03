/**
 * Standart API response helper'ları
 * Tutarlı response formatı sağlar
 */

export const sendSuccess = (res, data, statusCode = 200, meta = {}) => {
  return res.status(statusCode).json({
    success: true,
    data,
    ...meta,
  });
};

export const sendCreated = (res, data, meta = {}) => {
  return sendSuccess(res, data, 201, meta);
};

export const sendNoContent = (res) => {
  return res.status(204).end();
};

export const sendError = (res, message, statusCode = 400, details = null) => {
  return res.status(statusCode).json({
    success: false,
    error: message,
    ...(details && { details }),
  });
};

export const sendNotFound = (res, message = 'Kayıt bulunamadı') => {
  return sendError(res, message, 404);
};

export const sendServerError = (res, message = 'Sunucu hatası') => {
  return sendError(res, message, 500);
};
