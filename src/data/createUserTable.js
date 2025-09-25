import pool from "../config/db.js";

const createUserTable = async () => {
  const db_client = await pool.connect();
  try {
    await db_client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (error) {
    console.error("Error creating user table:", error);
  } finally {
    db_client.release();
  }
};

export default createUserTable;
