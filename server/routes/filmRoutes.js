import express from 'express';
import {
  listFilms,
  createFilm,
  removeFilm,
  editFilm
} from '../controllers/filmController.js';

const router = express.Router();

router.get('/', listFilms);
router.post('/', createFilm);
router.delete('/:id', removeFilm);
router.put('/:id', editFilm);

export default router;
