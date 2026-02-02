import { useState } from 'react';

export default function AddFilmForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !year) return;
    onAdd(title, year);
    setTitle("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Film adı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white border border-gray-600"
      />
      <input
        type="number"
        placeholder="Yıl"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white border border-gray-600"
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg text-white text-lg font-bold border border-white shadow-md hover:bg-blue-700 transition-colors duration-200">Ekle</button>
    </form>
  );
}
