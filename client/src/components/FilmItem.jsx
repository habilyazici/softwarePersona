export default function FilmItem({ film, onDelete }) {
  return (
    <li className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-4 rounded-xl shadow-lg flex justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <span className="font-bold text-lg drop-shadow-md">{film.title} <span className="text-pink-200">({film.year})</span></span>
      <button
        onClick={() => onDelete(film.id)}
        className="ml-4 bg-pink-500 px-4 py-2 rounded-lg text-white text-lg font-bold border border-white shadow-md hover:bg-pink-700 transition-colors duration-200"
      >Sil</button>
    </li>
  );
}
