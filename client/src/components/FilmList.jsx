/**
 * FilmList Component
 * Film listesi container bileşeni
 */
import FilmItem from './FilmItem';
import { EmptyState } from './common';

export default function FilmList({ films, onDelete, onUpdate }) {
  if (films.length === 0) {
    return (
      <EmptyState
        icon="🎥"
        title="Henüz film eklenmemiş"
        description="Yukarıdaki formu kullanarak film ekleyebilirsiniz"
      />
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
