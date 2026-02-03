/**
 * Request validation middleware'leri
 */

// Film ekleme/güncelleme validasyonu
export const validateFilm = (req, res, next) => {
  const { title, year } = req.body;
  const errors = [];

  // Title kontrolü
  if (!title || typeof title !== 'string') {
    errors.push('Film adı gereklidir');
  } else if (title.trim().length < 1 || title.trim().length > 200) {
    errors.push('Film adı 1-200 karakter arasında olmalıdır');
  }

  // Year kontrolü
  if (year === undefined || year === null) {
    errors.push('Yıl gereklidir');
  } else {
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearNum) || yearNum < 1888 || yearNum > currentYear + 10) {
      errors.push(`Yıl 1888 ile ${currentYear + 10} arasında olmalıdır`);
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validasyon hatası',
      details: errors,
    });
  }

  // Temizlenmiş verileri req.body'ye ekle
  req.body.title = title.trim();
  req.body.year = parseInt(year);
  
  next();
};

// ID parametresi validasyonu
export const validateId = (req, res, next) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id) || id < 1) {
    return res.status(400).json({
      success: false,
      error: 'Geçersiz ID',
    });
  }

  req.params.id = id;
  next();
};

// Partial update validasyonu (PUT için)
export const validateFilmUpdate = (req, res, next) => {
  const { title, year } = req.body;
  const errors = [];

  // En az bir alan olmalı
  if (!title && !year) {
    return res.status(400).json({
      success: false,
      error: 'En az bir alan (title veya year) gereklidir',
    });
  }

  // Title kontrolü (varsa)
  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim().length < 1 || title.trim().length > 200) {
      errors.push('Film adı 1-200 karakter arasında olmalıdır');
    } else {
      req.body.title = title.trim();
    }
  }

  // Year kontrolü (varsa)
  if (year !== undefined) {
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearNum) || yearNum < 1888 || yearNum > currentYear + 10) {
      errors.push(`Yıl 1888 ile ${currentYear + 10} arasında olmalıdır`);
    } else {
      req.body.year = yearNum;
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validasyon hatası',
      details: errors,
    });
  }

  next();
};
