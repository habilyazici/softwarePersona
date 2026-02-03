/**
 * Veritabanı bağlantısı ve şema yönetimi
 */
import Database from 'better-sqlite3';
import config from './config/index.js';
import { logger } from './utils/index.js';

const dbPath = `${config.database.path}${config.database.name}`;
const db = new Database(dbPath);

// Tablo oluşturma
const initializeDatabase = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS films (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      year INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  logger.success('📦 Database initialized');
};

// Veritabanını başlat
initializeDatabase();

export default db;
