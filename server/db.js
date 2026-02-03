import Database from 'better-sqlite3';

const db = new Database(process.env.DB_NAME || 'films.db');

db.exec(`CREATE TABLE IF NOT EXISTS films (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  year INTEGER NOT NULL
)`);

export default db;
