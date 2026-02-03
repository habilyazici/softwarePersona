/**
 * Header Component
 */
export default function Header() {
  return (
    <header className="py-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
        🎬 Film Koleksiyonu
      </h1>
      <p className="text-gray-400 mt-2">Favori filmlerinizi kaydedin ve yönetin</p>
    </header>
  );
}
