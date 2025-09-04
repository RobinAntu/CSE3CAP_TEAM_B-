import { Router } from 'express';
import { getUidFromRequest } from '../lib/security.js';

const router = Router();

router.post('/generate', async (req, res) => {
  try {
    const uid = await getUidFromRequest(req);
    if (!uid) throw new Error('unauthenticated');
    // TODO: implement server-side schedule generation
    res.json({ placed: {}, unmet: {} });
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

export default router;
