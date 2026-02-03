/**
 * Veritabanı bağlantısı ve şema yönetimi
 */
import Database from 'better-sqlite3';
import 'dotenv/config';

const dbName = process.env.DB_NAME || 'films.db';
const dbPath = process.env.DB_PATH || './';
const db = new Database(`${dbPath}${dbName}`);

// Tablo oluşturma
db.exec(`
  CREATE TABLE IF NOT EXISTS films (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log('📦 Database initialized');

export default db;
