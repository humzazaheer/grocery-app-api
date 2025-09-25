import pool from "../config/db.js";

const createBasketTable = async () => {
  const db_client = await pool.connect();
  try {
    await db_client.query(`
      CREATE TABLE IF NOT EXISTS basket (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (error) {
    console.error("Error creating basket table:", error);
  } finally {
    db_client.release();
  }
};

export default createBasketTable;
