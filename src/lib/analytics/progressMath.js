import { weekDays, toMinutes, addDays } from "../time";
import { startOfWeek, endOfWeek, isWithinInterval } from "date-fns";

export function minutesByDay(events, range) {
  const days = weekDays.map(d => ({ day: d, minutes: 0 }));
  for (const ev of events) {
    if (ev.kind !== "study") continue;
    const idx = weekDays.indexOf(ev.day);
    if (idx === -1) continue;
    const date = addDays(range.start, idx);
    if (!isWithinInterval(date, range)) continue;
    const mins = toMinutes(ev.end) - toMinutes(ev.start);
    days[idx].minutes += mins;
  }
  return days;
}

export function sumStudyMinutes(events, range) {
  return minutesByDay(events, range).reduce((a, b) => a + b.minutes, 0);
}

export function consecutiveStreak(daily, threshold = 30) {
  let streak = 0;
  for (let i = daily.length - 1; i >= 0; i--) {
    if (daily[i].minutes >= threshold) streak++;
    else break;
  }
  return streak;
}

export function focusScore(events, prefs, range) {
  const study = events.filter(e => e.kind === "study");
  if (!study.length) return 0;
  let totalLen = 0;
  let prefCount = 0;
  let late = 0;
  const usedDays = new Set();
  for (const ev of study) {
    const len = toMinutes(ev.end) - toMinutes(ev.start);
    totalLen += len;
    const hour = parseInt(ev.start.split(":")[0], 10);
    const isMorning = hour < 12;
    const isAfternoon = hour >= 12 && hour < 17;
    const isEvening = hour >= 17;
    if ((isMorning && prefs.preferredTimes.morning) || (isAfternoon && prefs.preferredTimes.afternoon) || (isEvening && prefs.preferredTimes.evening)) {
      prefCount++;
    }
    if (hour >= 20) late++;
    const idx = weekDays.indexOf(ev.day);
    if (idx >= 0) usedDays.add(idx);
  }
  const avgLen = totalLen / study.length;
  const sessionLengthScore = Math.min(avgLen / 60, 1);
  const preferenceMatch = prefCount / study.length;
  const consistency = usedDays.size / weekDays.length;
  const latePenalty = late / study.length;
  const focus = 0.4 * sessionLengthScore + 0.3 * preferenceMatch + 0.2 * consistency + 0.1 * (1 - latePenalty);
  return Math.round(focus * 100);
}

export function perSubjectTotals(events, tasks, range) {
  const totals = {};
  for (const ev of events) {
    if (ev.kind !== "study") continue;
    const idx = weekDays.indexOf(ev.day);
    if (idx === -1) continue;
    const date = addDays(range.start, idx);
    if (!isWithinInterval(date, range)) continue;
    const mins = toMinutes(ev.end) - toMinutes(ev.start);
    totals[ev.subjectId] = (totals[ev.subjectId] || 0) + mins;
  }
  const doneTasks = {};
  for (const t of tasks) {
    if (t.status === "done" && t.subjectId) {
      doneTasks[t.subjectId] = (doneTasks[t.subjectId] || 0) + 1;
    }
  }
  return { studyMinutes: totals, doneTasks };
}

export function buildStats(events, tasks, courses, range, prefs) {
  const daily = minutesByDay(events, range);
  const totalMinutes = daily.reduce((a, b) => a + b.minutes, 0);
  const target = courses.reduce((sum, c) => sum + (c.weeklyTargetHours || 0) * 60, 0);
  const completed = tasks.filter(t => t.status === "done").length;
  const focus = focusScore(events, prefs, range);
  const streak = consecutiveStreak(daily);
  return {
    studyMins: totalMinutes,
    targetMins: target,
    tasksCompleted: completed,
    completionRate: tasks.length ? Math.round((completed / tasks.length) * 100) : 0,
    streak,
    focus,
    daily,
  };
}
