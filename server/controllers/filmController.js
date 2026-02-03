/**
 * Film Controller - HTTP request/response işlemleri
 */
import { filmService } from '../services/index.js';
import { sendSuccess, sendCreated, sendNoContent, sendNotFound } from '../utils/index.js';
import { asyncHandler } from '../middleware/index.js';

/**
 * Tüm filmleri listele
 * GET /api/films
 */
export const listFilms = asyncHandler(async (req, res) => {
  const films = filmService.getAll();
  sendSuccess(res, films, 200, { count: films.length });
});

/**
 * Tek film getir
 * GET /api/films/:id
 */
export const getFilm = asyncHandler(async (req, res) => {
  const film = filmService.getById(req.params.id);
  sendSuccess(res, film);
});

/**
 * Yeni film oluştur
 * POST /api/films
 */
export const createFilm = asyncHandler(async (req, res) => {
  const { title, year } = req.body;
  const newFilm = filmService.create(title, year);
  sendCreated(res, newFilm);
});

/**
 * Film güncelle
 * PUT /api/films/:id
 */
export const editFilm = asyncHandler(async (req, res) => {
  const { title, year } = req.body;
  const updatedFilm = filmService.update(req.params.id, title, year);
  sendSuccess(res, updatedFilm);
});

/**
 * Film sil
 * DELETE /api/films/:id
 */
export const removeFilm = asyncHandler(async (req, res) => {
  filmService.delete(req.params.id);
  sendNoContent(res);
});

/**
 * Film istatistikleri
 * GET /api/films/stats
 */
export const getStats = asyncHandler(async (req, res) => {
  const stats = filmService.getStats();
  sendSuccess(res, stats);
});
