/**
 * StatsCard Component
 * İstatistik kartı bileşeni
 */
import { Card } from './common';

export default function StatsCard({ stats }) {
  if (!stats || stats.total === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <p className="text-3xl font-bold text-purple-400">{stats.total}</p>
        <p className="text-gray-400 text-sm">Toplam Film</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-3xl font-bold text-pink-400">{stats.oldestYear || '-'}</p>
        <p className="text-gray-400 text-sm">En Eski Film</p>
      </Card>
      <Card className="p-4 text-center hidden md:block">
        <p className="text-3xl font-bold text-indigo-400">{stats.newestYear || '-'}</p>
        <p className="text-gray-400 text-sm">En Yeni Film</p>
      </Card>
    </div>
  );
}
