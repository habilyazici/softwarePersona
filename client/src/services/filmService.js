/**
 * Film API Service
 * Backend ile iletişim katmanı
 */
import { ENDPOINTS } from '../constants';

class FilmService {
  /**
   * Tüm filmleri getir
   */
  async getAll() {
    try {
      const res = await fetch(ENDPOINTS.FILMS);
      if (!res.ok) throw new Error('Filmler yüklenemedi');
      const data = await res.json();
      return data.data || data; // Yeni API formatı veya eski format
    } catch (error) {
      console.error('Filmler alınırken hata:', error);
      throw error;
    }
  }

  /**
   * Tek film getir
   */
  async getById(id) {
    try {
      const res = await fetch(`${ENDPOINTS.FILMS}/${id}`);
      if (!res.ok) throw new Error('Film bulunamadı');
      const data = await res.json();
      return data.data || data;
    } catch (error) {
      console.error('Film alınırken hata:', error);
      throw error;
    }
  }

  /**
   * Yeni film ekle
   */
  async create(title, year) {
    try {
      const res = await fetch(ENDPOINTS.FILMS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, year: parseInt(year) })
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Film eklenemedi');
      }
      const data = await res.json();
      return data.data || data;
    } catch (error) {
      console.error('Film eklenirken hata:', error);
      throw error;
    }
  }

  /**
   * Film güncelle
   */
  async update(id, title, year) {
    try {
      const res = await fetch(`${ENDPOINTS.FILMS}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, year: parseInt(year) })
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Film güncellenemedi');
      }
      const data = await res.json();
      return data.data || data;
    } catch (error) {
      console.error('Film güncellenirken hata:', error);
      throw error;
    }
  }

  /**
   * Film sil
   */
  async delete(id) {
    try {
      const res = await fetch(`${ENDPOINTS.FILMS}/${id}`, {
        method: 'DELETE'
      });
      if (res.status !== 204) throw new Error('Film silinemedi');
      return true;
    } catch (error) {
      console.error('Film silinirken hata:', error);
      throw error;
    }
  }

  /**
   * İstatistikleri getir
   */
  async getStats() {
    try {
      const res = await fetch(ENDPOINTS.FILM_STATS);
      if (!res.ok) throw new Error('İstatistikler alınamadı');
      const data = await res.json();
      return data.data || data;
    } catch (error) {
      console.error('İstatistikler alınırken hata:', error);
      throw error;
    }
  }
}

// Singleton instance
export const filmService = new FilmService();
