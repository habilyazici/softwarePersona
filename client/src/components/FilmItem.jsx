import { useState } from 'react';

export default function FilmItem({ film, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(film.title);
  const [editYear, setEditYear] = useState(film.year);

  const handleSave = () => {
    if (!editTitle.trim() || !editYear) return;
    onUpdate(film.id, editTitle, editYear);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(film.title);
    setEditYear(film.year);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-xl shadow-lg border border-purple-500/50">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Film adı"
          />
          <input
            type="number"
            value={editYear}
            onChange={(e) => setEditYear(e.target.value)}
            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Yıl"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-white text-sm font-medium transition-colors"
            >
              İptal
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-sm font-medium transition-colors"
            >
              Kaydet ✓
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="group bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-purple-900/50 hover:to-pink-900/50 p-4 rounded-xl shadow-lg flex justify-between items-center transition-all duration-300 border border-transparent hover:border-purple-500/30">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🎬</span>
        <div>
          <h3 className="font-bold text-lg text-white group-hover:text-purple-200 transition-colors">
            {film.title}
          </h3>
          <p className="text-gray-400 text-sm">{film.year}</p>
        </div>
      </div>
      <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-2 bg-purple-600/80 hover:bg-purple-500 rounded-lg text-white text-sm font-medium transition-colors"
          title="Düzenle"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(film.id)}
          className="px-3 py-2 bg-red-600/80 hover:bg-red-500 rounded-lg text-white text-sm font-medium transition-colors"
          title="Sil"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
