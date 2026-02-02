import {
  getAllFilms,
  addFilm,
  deleteFilm,
  updateFilm,
  getFilmById
} from '../models/filmModel.js';

export function listFilms(req, res) {
  const films = getAllFilms();
  res.json(films);
}

export function createFilm(req, res) {
  const { title, year } = req.body;
  if (!title || !year) return res.status(400).json({ error: 'Eksik veri' });
  const newFilm = addFilm(title, year);
  res.status(201).json(newFilm);
}

export function removeFilm(req, res) {
  const id = parseInt(req.params.id);
  deleteFilm(id);
  res.status(204).end();
}

export function editFilm(req, res) {
  const id = parseInt(req.params.id);
  const { title, year } = req.body;
  const film = getFilmById(id);
  if (!film) return res.status(404).json({ error: 'Film bulunamadı' });
  const updatedFilm = updateFilm(id, title || film.title, year || film.year);
  res.json(updatedFilm);
}
