/**
 * AddFilmForm Component
 * Yeni film ekleme formu
 */
import { useState } from 'react';
import { Button, Input } from './common';
import { YEAR_LIMITS } from '../constants';

export default function AddFilmForm({ onAdd, disabled = false }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !year) return;

    setIsSubmitting(true);
    try {
      await onAdd(title.trim(), year);
      setTitle('');
      setYear('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid = title.trim().length > 0 && year;

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder="Film adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting || disabled}
          className="flex-1"
        />
        <Input
          type="number"
          placeholder="Yıl"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min={YEAR_LIMITS.MIN}
          max={YEAR_LIMITS.MAX}
          disabled={isSubmitting || disabled}
          className="w-full sm:w-28"
        />
        <Button
          type="submit"
          disabled={!isValid || disabled}
          loading={isSubmitting}
          className="hover:shadow-purple-500/25"
        >
          {isSubmitting ? 'Ekleniyor...' : '➕ Ekle'}
        </Button>
      </div>
    </form>
  );
}
