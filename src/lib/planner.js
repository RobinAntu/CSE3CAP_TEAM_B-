function minsToTime(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function timeToMins(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function buildSlots(times, length, hours) {
  const ranges = [];
  if (times.morning) ranges.push([9 * 60, 12 * 60]);
  if (times.afternoon) ranges.push([13 * 60, 17 * 60]);
  if (times.evening) ranges.push([18 * 60, 21 * 60]);

  const slots = [];
  for (const [start, end] of ranges) {
    for (let t = start; t + length <= end && slots.length < hours; t += length) {
      slots.push(minsToTime(t));
    }
  }
  return slots;
}

export function generatePlan(weekly, prefs = {}) {
  const { times = { morning: true, afternoon: true, evening: false }, length = 60, hours = 4 } = prefs;
  const slots = buildSlots(times, Number(length), Number(hours));
  const plan = [];

  Object.entries(weekly).forEach(([day, tasks]) => {
    tasks.forEach((t, idx) => {
      const start = slots[idx % slots.length] || "09:00";
      const end = minsToTime(timeToMins(start) + Number(length));
      plan.push({ title: t.title, day, start, end });
    });
  });

  return plan;
}
