import FilmItem from './FilmItem';

export default function FilmList({ films, onDelete }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Film Listesi</h2>
      <ul className="space-y-2">
        {films.map((film) => (
          <FilmItem key={film.id} film={film} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
