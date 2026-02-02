import { useState, useEffect } from 'react';
import FilmList from './components/FilmList';
import AddFilmForm from './components/AddFilmForm';
import { fetchFilms, addFilm, deleteFilm } from './api/filmApi';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  // Filmleri backend'den al
  useEffect(() => {
    fetchFilms().then(setFilms);
  }, []);

  // Film ekle
  const handleAddFilm = async (title, year) => {
    const newFilm = await addFilm(title, year);
    if (newFilm) setFilms([...films, newFilm]);
  };

  // Film sil
  const handleDeleteFilm = async (id) => {
    const success = await deleteFilm(id);
    if (success) setFilms(films.filter(film => film.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-white flex flex-col items-center justify-center p-8 transition-all duration-500">
      <h1 className="text-5xl font-extrabold mb-10 tracking-tight text-pink-300 drop-shadow-lg animate-bounce">🎬 Film Uygulaması</h1>
      <div className="w-full max-w-xl bg-gradient-to-tr from-gray-900 via-indigo-800 to-purple-900 rounded-2xl shadow-2xl p-8 border-4 border-pink-400">
        <AddFilmForm onAdd={handleAddFilm} />
        <FilmList films={films} onDelete={handleDeleteFilm} />
      </div>
      <footer className="mt-10 flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 text-2xl">
            <span aria-label="GitHub" role="img">🐙</span>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 text-2xl">
            <span aria-label="Twitter" role="img">🐦</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 text-2xl">
            <span aria-label="Instagram" role="img">📸</span>
          </a>
        </div>
        <span className="text-gray-400 text-sm">Tasarım ve kod: <span className="text-pink-400 font-bold">Senin Adın</span></span>
      </footer>
    </div>
  );
}

export default App
