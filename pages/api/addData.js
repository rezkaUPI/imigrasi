// /api/addData.js
import { query } from '../../db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method not allowed' });
      return;
    }
  
    const { table } = req.query;
    const newData = req.body;
  
    try {
      const columns = Object.keys(newData).join(', ');
      const values = Object.values(newData);
      const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
  
      const insertQuery = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`;
      const result = await query(insertQuery, values);
  
      if (result.rowCount > 0) {
        res.status(201).json({ message: 'Data added successfully', data: result.rows[0] });
      } else {
        res.status(500).json({ message: 'Failed to add data' });
      }
    } catch (error) {
      console.error('Error adding data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }