import { json } from "express";
import pool from "../config/db.js";

export const createBasketService = async (itemData) => {
  const db_client = await pool.connect();
  const { name, quantity } = itemData;
  const query = `INSERT INTO basket (name, quantity) VALUES ($1, $2) RETURNING *`;
  try {
    const newRecord = await db_client.query(query, [name, quantity]);
    return newRecord.rows[0];
  } catch (error) {
    console.error("Error creating item:", error.message);
    throw error;
  } finally {
    db_client.release();
  }
};

export const deleteBasketService = async (id) => {
  const db_client = await pool.connect();
  const query = `DELETE FROM basket WHERE id = $1`;
  try {
    const deletedItem = await db_client.query(query, [id]);
    if (deletedItem.rowCount === 0) {
      throw new Error('Item not found');
    }
    return deletedItem
  }
  catch(error) {
    console.log('Unable to delete item: ', error.message);
    throw error;
  }
  finally {
    db_client.release();
  }
}

export const updateBasketService = async (itemData) => {
  const db_client = await pool.connect();
  const { id, name, quantity } = itemData;
  const query = `UPDATE basket SET name = $1, quantity = $2 WHERE id = $3 RETURNING *`;
  try {
    const updatedRecord = await db_client.query(query, [name, quantity, id]);
    if (updatedRecord.rowCount === 0) {
      throw new Error('Item not found');
    }
    return updatedRecord.rows[0];
  }
  catch(error) {
    console.log('Unable to update item: ', error.message);
    throw error;
  }
  finally {
    db_client.release();
  }
}

export const isPurchasedBasketService = async (id) => {
  const db_client = await pool.connect();
  
  const query = `UPDATE basket SET is_purchased = true WHERE id = $1 RETURNING *`;
  try {
    const updatedRecord = await db_client.query(query, [id]);
    if (updatedRecord.rowCount === 0) {
      throw new Error('Item not found');
    }
    return updatedRecord.rows[0];
  }
  catch(error) {
    console.log('Unable to update item: ', error.message);
    throw error;
  }
  finally {
    db_client.release();
  }
}

export const getAllItemsService = async () => {
  const db_client = await pool.connect();
  const query = `SELECT * FROM basket`;
  try {
    const records = await db_client.query(query);
    return records.rows;
  } catch (error) {
    console.error("Error getting items:", error.message);
    throw error;
  } finally {
    db_client.release();
  }
};

