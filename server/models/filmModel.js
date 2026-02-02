import db from '../db.js';

export function getAllFilms() {
  return db.prepare('SELECT * FROM films').all();
}

export function addFilm(title, year) {
  const stmt = db.prepare('INSERT INTO films (title, year) VALUES (?, ?)');
  const info = stmt.run(title, year);
  return { id: info.lastInsertRowid, title, year };
}

export function deleteFilm(id) {
  db.prepare('DELETE FROM films WHERE id = ?').run(id);
}

export function updateFilm(id, title, year) {
  const stmt = db.prepare('UPDATE films SET title = ?, year = ? WHERE id = ?');
  stmt.run(title, year, id);
  return getFilmById(id);
}

export function getFilmById(id) {
  return db.prepare('SELECT * FROM films WHERE id = ?').get(id);
}
