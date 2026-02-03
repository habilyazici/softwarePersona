/**
 * Tarih formatlama utility'si
 */

export const formatYear = (year) => {
  return year?.toString() || '-';
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const isValidYear = (year, minYear = 1888, maxYear = getCurrentYear() + 5) => {
  const yearNum = parseInt(year);
  return !isNaN(yearNum) && yearNum >= minYear && yearNum <= maxYear;
};
