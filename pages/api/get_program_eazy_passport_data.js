import { query } from '../../db';
export default async function handler(req, res) {
    try {
      const result = await query('SELECT * FROM program_eazy_passport ORDER BY tanggal');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data from the database' });
    }
  }