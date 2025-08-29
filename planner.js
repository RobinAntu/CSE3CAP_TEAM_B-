// Simple study planning pipeline demonstrating backend steps
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
  // here we'd persist to a database; in this prototype we just echo it
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
  // store plan for user; here we simply return it
  return plan;
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
