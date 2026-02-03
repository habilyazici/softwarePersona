const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/films';

export async function fetchFilms() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Filmler yüklenemedi');
    return await res.json();
  } catch (error) {
    console.error('Filmler alınırken hata:', error);
    throw error;
  }
}

export async function addFilm(title, year) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, year: parseInt(year) })
    });
    if (!res.ok) throw new Error('Film eklenemedi');
    return await res.json();
  } catch (error) {
    console.error('Film eklenirken hata:', error);
    throw error;
  }
}

export async function deleteFilm(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (res.status !== 204) throw new Error('Film silinemedi');
    return true;
  } catch (error) {
    console.error('Film silinirken hata:', error);
    throw error;
  }
}

export async function updateFilm(id, title, year) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, year: parseInt(year) })
    });
    if (!res.ok) throw new Error('Film güncellenemedi');
    return await res.json();
  } catch (error) {
    console.error('Film güncellenirken hata:', error);
    throw error;
  }
}
