import pool from "../config/db.js";

export const createBasketTable = async () => {
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

export const addColumnBasketTable = async () => {
  const db_client = await pool.connect();
  try {
    await db_client.query(`
      ALTER TABLE basket ADD COLUMN IF NOT EXISTS is_purchased BOOLEAN DEFAULT FALSE;
    `);
    console.log('is_purchased column added to basket table');
  } catch (error) {
    console.error("Error adding is_purchased column to basket table:", error);
  } finally {
    db_client.release();
  }
};

