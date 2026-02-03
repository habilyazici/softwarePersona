import FilmItem from './FilmItem';

export default function FilmList({ films, onDelete, onUpdate }) {
  if (films.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎥</div>
        <p className="text-gray-400 text-lg">Henüz film eklenmemiş</p>
        <p className="text-gray-500 text-sm mt-2">Yukarıdaki formu kullanarak film ekleyebilirsiniz</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-200 flex items-center gap-2">
        <span>🎞️</span> Film Listesi
        <span className="text-sm font-normal text-gray-500">({films.length} film)</span>
      </h2>
      <ul className="space-y-3">
        {films.map((film) => (
          <FilmItem 
            key={film.id} 
            film={film} 
            onDelete={onDelete} 
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
