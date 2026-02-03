/**
 * String işleme utility'leri
 */

export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str, maxLength = 50) => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

export const isEmpty = (str) => {
  return !str || str.trim().length === 0;
};
