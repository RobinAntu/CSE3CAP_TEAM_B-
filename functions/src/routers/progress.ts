import { Router } from 'express';
import { getUidFromRequest } from '../lib/security.js';

const router = Router();

router.get('/weekly', async (req, res) => {
  try {
    const uid = await getUidFromRequest(req);
    if (!uid) throw new Error('unauthenticated');
    // TODO: aggregate progress metrics
    res.json({ studyMinutesByDay: [], streak: 0, focusScore: 0 });
  } catch (e) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

export default router;
