/**
 * FilmItem Component
 * Tekil film kartı bileşeni
 */
import { useState } from 'react';
import { Button, Input } from './common';
import { YEAR_LIMITS } from '../constants';

export default function FilmItem({ film, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(film.title);
  const [editYear, setEditYear] = useState(film.year);

  const handleSave = () => {
    if (!editTitle.trim() || !editYear) return;
    onUpdate(film.id, editTitle.trim(), editYear);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(film.title);
    setEditYear(film.year);
    setIsEditing(false);
  };

  // Düzenleme modu
  if (isEditing) {
    return (
      <li className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-xl shadow-lg border border-purple-500/50">
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Film adı"
          />
          <Input
            type="number"
            value={editYear}
            onChange={(e) => setEditYear(e.target.value)}
            placeholder="Yıl"
            min={YEAR_LIMITS.MIN}
            max={YEAR_LIMITS.MAX}
          />
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" size="sm" onClick={handleCancel}>
              İptal
            </Button>
            <Button variant="success" size="sm" onClick={handleSave}>
              Kaydet ✓
            </Button>
          </div>
        </div>
      </li>
    );
  }

  // Normal görünüm
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
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(true)}
          title="Düzenle"
          className="bg-purple-600/80 hover:bg-purple-500"
        >
          ✏️
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(film.id)}
          title="Sil"
        >
          🗑️
        </Button>
      </div>
    </li>
  );
}
