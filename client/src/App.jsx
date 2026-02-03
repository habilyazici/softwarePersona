import { useState, useEffect } from 'react';
import FilmList from './components/FilmList';
import AddFilmForm from './components/AddFilmForm';
import { fetchFilms, addFilm, deleteFilm, updateFilm } from './api/filmApi';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);

  // Bildirim göster
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Filmleri backend'den al
  useEffect(() => {
    loadFilms();
  }, []);

  const loadFilms = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFilms();
      setFilms(data);
    } catch (err) {
      setError('Filmler yüklenirken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  // Film ekle
  const handleAddFilm = async (title, year) => {
    try {
      const newFilm = await addFilm(title, year);
      setFilms([...films, newFilm]);
      showNotification('Film başarıyla eklendi! 🎬');
    } catch (err) {
      showNotification('Film eklenirken hata oluştu', 'error');
    }
  };

  // Film sil
  const handleDeleteFilm = async (id) => {
    try {
      await deleteFilm(id);
      setFilms(films.filter(film => film.id !== id));
      showNotification('Film silindi 🗑️');
    } catch (err) {
      showNotification('Film silinirken hata oluştu', 'error');
    }
  };

  // Film güncelle
  const handleUpdateFilm = async (id, title, year) => {
    try {
      const updatedFilm = await updateFilm(id, title, year);
      setFilms(films.map(film => film.id === id ? updatedFilm : film));
      showNotification('Film güncellendi ✨');
    } catch (err) {
      showNotification('Film güncellenirken hata oluştu', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center p-4 md:p-8">
      {/* Bildirim */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg animate-fade-in ${
          notification.type === 'error' 
            ? 'bg-red-500/90 text-white' 
            : 'bg-green-500/90 text-white'
        }`}>
          {notification.message}
        </div>
      )}

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          🎬 Film Koleksiyonu
        </h1>
        <p className="text-gray-400 mt-2">Favori filmlerinizi kaydedin ve yönetin</p>
      </header>

      {/* Ana İçerik */}
      <main className="w-full max-w-2xl">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10">
          <AddFilmForm onAdd={handleAddFilm} />
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-400 mb-4">{error}</p>
              <button 
                onClick={loadFilms}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                Tekrar Dene
              </button>
            </div>
          ) : (
            <FilmList 
              films={films} 
              onDelete={handleDeleteFilm} 
              onUpdate={handleUpdateFilm}
            />
          )}
        </div>

        {/* İstatistikler */}
        {!loading && !error && films.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center border border-white/10">
              <p className="text-3xl font-bold text-purple-400">{films.length}</p>
              <p className="text-gray-400 text-sm">Toplam Film</p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center border border-white/10">
              <p className="text-3xl font-bold text-pink-400">
                {films.length > 0 ? Math.min(...films.map(f => f.year)) : '-'}
              </p>
              <p className="text-gray-400 text-sm">En Eski Film</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-8 flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform">
            <span aria-label="GitHub" role="img">🐙</span>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-400 transition-colors text-2xl hover:scale-110 transform">
            <span aria-label="Twitter" role="img">🐦</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-pink-400 transition-colors text-2xl hover:scale-110 transform">
            <span aria-label="Instagram" role="img">📸</span>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          Tasarım ve kod: <span className="text-purple-400 font-semibold">Habil Yazıcı</span>
        </p>
      </footer>
    </div>
  );
}

export default App
