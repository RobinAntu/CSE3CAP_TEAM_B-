import { Router } from 'express';
import { getUidFromRequest } from '../lib/security.js';
import { parseCsv } from '../lib/csv.js';

const router = Router();

router.post('/csv', async (req, res) => {
  try {
    const uid = await getUidFromRequest(req);
    if (!uid) throw new Error('unauthenticated');
    const rows = await parseCsv(req.body?.csv || '');
    // TODO: upsert courses/events
    res.json({ imported: rows.length });
  } catch (e) {
    res.status(400).json({ error: 'Invalid CSV' });
  }
});

export default router;
