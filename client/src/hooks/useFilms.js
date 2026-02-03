/**
 * useFilms Hook
 * Film verilerini yönetmek için custom hook
 */
import { useState, useEffect, useCallback } from 'react';
import { filmService } from '../services';

export function useFilms() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filmleri yükle
  const loadFilms = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await filmService.getAll();
      setFilms(data);
    } catch (err) {
      setError(err.message || 'Filmler yüklenirken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  }, []);

  // İlk yükleme
  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  // Film ekle
  const addFilm = useCallback(async (title, year) => {
    const newFilm = await filmService.create(title, year);
    setFilms(prev => [...prev, newFilm]);
    return newFilm;
  }, []);

  // Film güncelle
  const updateFilm = useCallback(async (id, title, year) => {
    const updatedFilm = await filmService.update(id, title, year);
    setFilms(prev => prev.map(film => film.id === id ? updatedFilm : film));
    return updatedFilm;
  }, []);

  // Film sil
  const deleteFilm = useCallback(async (id) => {
    await filmService.delete(id);
    setFilms(prev => prev.filter(film => film.id !== id));
  }, []);

  // İstatistikler
  const stats = {
    total: films.length,
    oldestYear: films.length > 0 ? Math.min(...films.map(f => f.year)) : null,
    newestYear: films.length > 0 ? Math.max(...films.map(f => f.year)) : null,
  };

  return {
    films,
    loading,
    error,
    stats,
    loadFilms,
    addFilm,
    updateFilm,
    deleteFilm,
  };
}
