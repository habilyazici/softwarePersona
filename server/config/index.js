/**
 * Uygulama yapılandırma ayarları
 * Tüm environment değişkenleri burada merkezi olarak yönetilir
 */
import 'dotenv/config';

const config = {
  // Server ayarları
  server: {
    port: parseInt(process.env.PORT) || 3001,
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
  },

  // Veritabanı ayarları
  database: {
    name: process.env.DB_NAME || 'films.db',
    path: process.env.DB_PATH || './',
  },

  // CORS ayarları
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  },

  // API ayarları
  api: {
    prefix: '/api',
    version: 'v1',
  },
};

export default config;
