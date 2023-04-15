// /pages/api/tables.js
import { query } from '../../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { rows } = await query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'");
      const tableNames = rows.map((row) => row.table_name);
      res.status(200).json(tableNames);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ message: 'Error executing query.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
