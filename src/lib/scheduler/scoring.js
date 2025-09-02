import { toMinutes, overlaps } from "./time";

export function deadlineUrgency(course, nowISO) {
  if (!course.assessments || course.assessments.length === 0) return 0;
  const now = new Date(nowISO);
  const days = course.assessments.map((a) => {
    const diff = new Date(a.deadlineISO) - now;
    return diff / 86400000; // days
  });
  const minDays = Math.min(...days);
  return Math.max(0, Math.min(1, 1 - minDays / 14));
}

export function preferenceMatch(slot, prefs) {
  const hour = Math.floor(toMinutes(slot.start) / 60);
  if (hour >= 7 && hour < 12) return prefs.preferredTimes.morning ? 1 : 0.5;
  if (hour >= 12 && hour < 17) return prefs.preferredTimes.afternoon ? 1 : 0.5;
  if (hour >= 17 && hour < 22) return prefs.preferredTimes.evening ? 1 : 0;
  return 0;
}

export function courseWeight(course) {
  let w = (course.weeklyTargetHours || 0) / 6;
  if (course.assessments && course.assessments.some((a) => a.priority === "high")) w += 0.2;
  return Math.min(1, w);
}

export function fatiguePenalty(slot, daySchedule) {
  const end = toMinutes(slot.end);
  let pen = end > toMinutes("20:30") ? 1 : 0;
  if (daySchedule.some((s) => overlaps(s, slot) || s.end === slot.start)) pen += 0.5;
  return pen;
}

export function scoreSlot(slot, course, context) {
  const { prefs, nowISO, daySchedule } = context;
  const urgency = deadlineUrgency(course, nowISO);
  const match = preferenceMatch(slot, prefs);
  const weight = courseWeight(course);
  const fatigue = fatiguePenalty(slot, daySchedule);
  const α = 3, β = 2, γ = 2, δ = 1;
  return α * urgency + β * match + γ * weight - δ * fatigue;
}
