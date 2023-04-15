// /pages/api/query.js
import { query } from '../../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { table } = req.query;
    if (!table) {
      return res.status(400).json({ message: 'Table name is required.' });
    }

    try {
      const { rows } = await query(`SELECT * FROM ${table}`);
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ message: 'Error executing query.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}