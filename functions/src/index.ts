import express from 'express';
import cors from 'cors';
import { initializeApp } from 'firebase-admin/app';
import { onRequest, onCall, onDocumentWritten, onSchedule } from 'firebase-functions/v2';
import scheduleRouter from './routers/schedule.js';
import exportRouter from './routers/export.js';
import importRouter from './routers/import.js';
import progressRouter from './routers/progress.js';

// Initialize Firebase Admin SDK
initializeApp();

const app = express();
const allowed = process.env.CORS_ALLOW_ORIGINS || '*';
app.use(cors({ origin: allowed.split(','), credentials: true }));
app.use(express.json());

app.use('/api/schedule', scheduleRouter);
app.use('/api/export', exportRouter);
app.use('/api/import', importRouter);
app.use('/api/progress', progressRouter);

export const api = onRequest(app);

export const tasksBulkUpdate = onCall(async () => {
  // TODO: implement bulk task updates
  return { status: 'ok' };
});

export const onEventWrite = onDocumentWritten('/users/{uid}/events/{eventId}', async () => {
  // TODO: recompute conflict flags
});

export const onTaskWrite = onDocumentWritten('/users/{uid}/tasks/{taskId}', async () => {
  // TODO: recompute progress cache
});

export const nightlyNudge = onSchedule('every day 20:00', async () => {
  // TODO: send nudges to users behind schedule
});
