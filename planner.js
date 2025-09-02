// Simple study planning pipeline demonstrating backend steps
// simple localStorage-backed database
const DB_KEY = 'studyflex-db';

function loadDB() {
  try {
    return JSON.parse(localStorage.getItem(DB_KEY)) || {};
  } catch {
    return {};
  }
}

function saveDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

// Step 1: User Registration & Authentication
function authenticateUser(user) {
  // demo auth - real app would verify credentials and issue token
  console.log('Authenticating', user.email);
  return { token: 'demo-token' };
}

// Step 2: Input Collection
function collectInputs(data) {
  // data contains tasks and preferences
  return data;
}

// Step 3: Backend Data Management
function storeData(data) {
  const db = loadDB();
  if (data.tasks) db.tasks = data.tasks;
  if (data.preferences) db.preferences = data.preferences;
  if (data.sessions) db.sessions = data.sessions;
  saveDB(db);
  return data;
}

// Step 5: AI/ML Models - time estimation
function estimateHours(task) {
  const base = { easy: 1, medium: 2, hard: 3 }[task.difficulty] || 2;
  const daysLeft = (new Date(task.deadline) - new Date()) / 86400000;
  return Math.max(base, base * (1 + (7 - Math.min(daysLeft, 7)) / 7));
}

// Step 5: AI/ML Models - priority scoring
function priorityScore(task) {
  const daysLeft = (new Date(task.deadline) - new Date()) / 86400000;
  const weight = task.weight || 1; // higher weight -> more important
  return weight * 100 - daysLeft;
}

// derive free hourly slots by removing class or saved sessions
function computeAvailability(sessions, opts = {}) {
  const { dayStart = 8, dayEnd = 18 } = opts;
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const occupied = new Set();
  sessions.forEach((s) => {
    const hour = parseInt(s.time.split(':')[0], 10);
    occupied.add(`${s.day}-${hour}`);
  });
  const format = (h) => {
    const suffix = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 === 0 ? 12 : h % 12;
    return `${hour}${suffix}`;
  };
  const free = [];
  days.forEach((d) => {
    for (let h = dayStart; h < dayEnd; h++) {
      if (!occupied.has(`${d}-${h}`)) free.push(`${d} ${format(h)}`);
    }
  });
  return free;
}

// Step 6: Scheduling Optimizer
function optimizeSchedule(tasks, preferences) {
  const availability = preferences.availability || [];
  const plan = [];
  let slotIndex = 0;

  tasks
    .sort((a, b) => b.score - a.score)
    .forEach((task) => {
      let hours = Math.ceil(task.hours);
      while (hours > 0 && slotIndex < availability.length) {
        plan.push({ task: task.name, slot: availability[slotIndex++] });
        hours -= 1;
      }
    });
  return plan;
}

// Step 4: Job Orchestration
function orchestratePlan(data) {
  const tasks = data.tasks.map((t) => ({
    ...t,
    hours: estimateHours(t),
    score: priorityScore(t),
  }));
  return optimizeSchedule(tasks, data.preferences);
}

// Step 7: Plan Storage & Synchronization
function savePlan(plan) {
  const db = loadDB();
  db.plan = plan;
  saveDB(db);
  return plan;
}

function getStoredData() {
  return loadDB();
}

function generatePlan(user, data) {
  authenticateUser(user);
  const collected = collectInputs(data);
  const stored = storeData(collected);
  const plan = orchestratePlan(stored);
  return savePlan(plan);
}

// expose globally for the browser environment
window.generatePlan = generatePlan;
window.saveUserData = storeData;
window.getStoredData = getStoredData;
window.computeAvailability = computeAvailability;
