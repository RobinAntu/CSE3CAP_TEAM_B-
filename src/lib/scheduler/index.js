export * from "./time";
export * from "./scoring";
export * from "./greedyRepair";
import { weekDays, mkSlot } from "./time";

export function makeWeekConfig(prefs) {
  return {
    days: weekDays,
    startHour: prefs.workingHours.start,
    endHour: prefs.workingHours.end,
  };
}

export function collectFixedEvents(state) {
  const fixed = [];
  state.courses.forEach((c) => {
    (c.fixedSlots || []).forEach((fs) => fixed.push(mkSlot(fs.day, fs.start, fs.end)));
  });
  (state.events || []).forEach((e) => {
    if (!e.title.startsWith("Study: ")) fixed.push(mkSlot(e.day, e.start, e.end));
  });
  return fixed;
}
