export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function dayIndex(day) {
  return weekDays.indexOf(day);
}

export function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function toHHMM(mins) {
  const h = String(Math.floor(mins / 60)).padStart(2, "0");
  const m = String(mins % 60).padStart(2, "0");
  return `${h}:${m}`;
}

export function rangeMinutes(start, end, step) {
  const out = [];
  for (let m = start; m < end; m += step) out.push(m);
  return out;
}

export function overlaps(a, b) {
  return toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}

export function clampToWorkingHours(slot, startHour, endHour) {
  const s = Math.max(toMinutes(slot.start), startHour * 60);
  const e = Math.min(toMinutes(slot.end), endHour * 60);
  return { ...slot, start: toHHMM(s), end: toHHMM(e) };
}

export function mkSlot(day, start, end) {
  return { day, start, end };
}

export function freeSlots(weekConfig, fixedEvents, sessionMinutes) {
  const slots = [];
  for (const day of weekConfig.days) {
    const dayFixed = fixedEvents.filter((e) => e.day === day);
    const startM = weekConfig.startHour * 60;
    const endM = weekConfig.endHour * 60;
    for (const m of rangeMinutes(startM, endM - sessionMinutes, sessionMinutes)) {
      const slot = { day, start: toHHMM(m), end: toHHMM(m + sessionMinutes) };
      if (!dayFixed.some((e) => overlaps(e, slot))) slots.push(slot);
    }
  }
  return slots;
}
