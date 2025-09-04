import { Router } from 'express';
import { getUidFromRequest } from '../lib/security.js';
import { buildICS } from '../lib/ics.js';

const router = Router();

router.post('/ics', async (req, res) => {
  try {
    const uid = await getUidFromRequest(req);
    if (!uid) throw new Error('unauthenticated');
    // TODO: fetch events from Firestore
    const ics = buildICS([]);
    res.set('Content-Type', 'text/calendar').send(ics);
  } catch (e) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

export default router;
