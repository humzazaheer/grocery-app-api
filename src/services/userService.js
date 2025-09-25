import pool from "../config/db.js";

export const createUserService = async (userData) => {
  const db_client = await pool.connect();
  const { name, email } = userData;
  const query = `INSERT INTO users (name, email) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING RETURNING *`;
  try {
    const newRecord = await db_client.query(query, [name, email]);
    return newRecord.rows[0];
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  } finally {
    db_client.release();
  }
};

export const deleteUserService = async (id) => {
  const db_client = await pool.connect();
  const query = `DELETE FROM users WHERE id = $1`;
  try {
    await db_client.query(query, [id]);
  }
  catch(error) {
    console.log('Unable to delete user: ', error.message);
    throw error;
  }
  finally {
    db_client.release();
  }
}

export const updateUserService = async (userData) => {
  const db_client = await pool.connect();
  const { id, name, email } = userData;
  const query = `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *`;
  try {
    const updatedRecord = await db_client.query(query, [name, email, id]);
    return updatedRecord.rows[0];
  }
  catch(error) {
    console.log('Unable to update user: ', error.message);
    throw error;
  }
  finally {
    db_client.release();
  }
}

