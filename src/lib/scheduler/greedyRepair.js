import { scoreSlot } from "./scoring";
import { freeSlots, overlaps } from "./time";

export function enumerateCandidates({ courses, fixedEvents, prefs, weekConfig }) {
  const slots = freeSlots(weekConfig, fixedEvents, prefs.sessionMinutes);
  const candidates = [];
  const nowISO = new Date().toISOString();
  for (const slot of slots) {
    for (const course of courses) {
      if (course._remaining <= 0) continue;
      const score = scoreSlot(slot, course, { prefs, nowISO, daySchedule: [] });
      candidates.push({ score, slot, courseId: course.id });
    }
  }
  return candidates.sort((a, b) => b.score - a.score);
}

export function greedyFill(candidates, ctx) {
  const { prefs, courseMap } = ctx;
  const schedule = [];
  const usedByDay = { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [], Sat: [], Sun: [] };
  const dailyTotals = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
  for (const c of candidates) {
    const { slot, courseId } = c;
    const day = slot.day;
    const course = courseMap[courseId];
    if (course._remaining <= 0) continue;
    if (dailyTotals[day] + prefs.sessionMinutes / 60 > prefs.dailyMaxHours) continue;
    if (usedByDay[day].some((s) => overlaps(s, slot))) continue;
    schedule.push({ slot, courseId });
    usedByDay[day].push(slot);
    dailyTotals[day] += prefs.sessionMinutes / 60;
    course._remaining -= prefs.sessionMinutes / 60;
  }
  return { schedule, usedByDay, dailyTotals };
}

export function toEvents(greedyPlan, courseMap) {
  return greedyPlan.schedule.map(({ slot, courseId }) => {
    const course = courseMap[courseId];
    return {
      id: crypto.randomUUID(),
      title: `Study: ${course.code}`,
      day: slot.day,
      start: slot.start,
      end: slot.end,
      courseId,
      color: course.color || "#3b82f6",
    };
  });
}

export function buildSchedule({ courses, fixedEvents, prefs, weekConfig }) {
  const courseMap = Object.fromEntries(
    courses.map((c) => [c.id, { ...c, _remaining: c.weeklyTargetHours || 0 }])
  );
  const candidates = enumerateCandidates({ courses: Object.values(courseMap), fixedEvents, prefs, weekConfig });
  const greedy = greedyFill(candidates, { prefs, weekConfig, courseMap });
  return toEvents(greedy, courseMap);
}
