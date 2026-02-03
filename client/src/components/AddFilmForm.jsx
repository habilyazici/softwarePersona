import { useState } from 'react';

export default function AddFilmForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !year) return;
    
    setIsSubmitting(true);
    try {
      await onAdd(title.trim(), year);
      setTitle("");
      setYear("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Film adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-slate-800/50 text-white border border-slate-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder-gray-500"
          disabled={isSubmitting}
        />
        <input
          type="number"
          placeholder="Yıl"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min="1888"
          max={currentYear + 5}
          className="w-full sm:w-28 px-4 py-3 rounded-xl bg-slate-800/50 text-white border border-slate-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder-gray-500"
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          disabled={isSubmitting || !title.trim() || !year}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-xl text-white font-bold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin">⏳</span>
              Ekleniyor...
            </>
          ) : (
            <>
              <span>➕</span>
              Ekle
            </>
          )}
        </button>
      </div>
    </form>
  );
}
