/**
 * Film Service - İş mantığı katmanı
 * Controller ile Model arasında köprü görevi görür
 */
import * as filmModel from '../models/filmModel.js';

class FilmService {
  /**
   * Tüm filmleri getir
   */
  getAll() {
    return filmModel.getAllFilms();
  }

  /**
   * ID'ye göre film getir
   */
  getById(id) {
    const film = filmModel.getFilmById(id);
    if (!film) {
      const error = new Error('Film bulunamadı');
      error.statusCode = 404;
      throw error;
    }
    return film;
  }

  /**
   * Yeni film oluştur
   */
  create(title, year) {
    return filmModel.addFilm(title, year);
  }

  /**
   * Film güncelle
   */
  update(id, title, year) {
    // Önce filmin var olduğunu kontrol et
    const existingFilm = filmModel.getFilmById(id);
    if (!existingFilm) {
      const error = new Error('Film bulunamadı');
      error.statusCode = 404;
      throw error;
    }

    // Güncelleme için değerleri belirle
    const newTitle = title || existingFilm.title;
    const newYear = year || existingFilm.year;

    return filmModel.updateFilm(id, newTitle, newYear);
  }

  /**
   * Film sil
   */
  delete(id) {
    // Önce filmin var olduğunu kontrol et
    const existingFilm = filmModel.getFilmById(id);
    if (!existingFilm) {
      const error = new Error('Film bulunamadı');
      error.statusCode = 404;
      throw error;
    }

    filmModel.deleteFilm(id);
    return true;
  }

  /**
   * İstatistikleri getir
   */
  getStats() {
    const films = filmModel.getAllFilms();
    return {
      total: films.length,
      oldestYear: films.length > 0 ? Math.min(...films.map(f => f.year)) : null,
      newestYear: films.length > 0 ? Math.max(...films.map(f => f.year)) : null,
    };
  }
}

// Singleton instance
export default new FilmService();
