const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/films';

export async function fetchFilms() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addFilm(title, year) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, year })
  });
  return res.ok ? res.json() : null;
}

export async function deleteFilm(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.status === 204;
}

export async function updateFilm(id, title, year) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, year })
  });
  return res.ok ? res.json() : null;
}
