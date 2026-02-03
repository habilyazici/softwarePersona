/**
 * Film API Routes
 */
import express from 'express';
import {
  listFilms,
  getFilm,
  createFilm,
  removeFilm,
  editFilm,
  getStats
} from '../controllers/filmController.js';
import { validateFilm, validateId, validateFilmUpdate } from '../middleware/index.js';

const router = express.Router();

// GET /api/films/stats - İstatistikler (önce tanımlanmalı, :id'den önce)
router.get('/stats', getStats);

// GET /api/films - Tüm filmler
router.get('/', listFilms);

// GET /api/films/:id - Tek film
router.get('/:id', validateId, getFilm);

// POST /api/films - Yeni film
router.post('/', validateFilm, createFilm);

// PUT /api/films/:id - Film güncelle
router.put('/:id', validateId, validateFilmUpdate, editFilm);

// DELETE /api/films/:id - Film sil
router.delete('/:id', validateId, removeFilm);

export default router;
