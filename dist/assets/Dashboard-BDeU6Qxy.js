import { g as useAppContext, j as jsxRuntimeExports, u as useNavigate, R as React, L as Link } from "./index-CuFUwhe-.js";
import { B as Button } from "./Button-CSPNikPN.js";
import { C as Card } from "./Card-CqNhy3JV.js";
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}
function toHHMM(mins) {
  const h = String(Math.floor(mins / 60)).padStart(2, "0");
  const m = String(mins % 60).padStart(2, "0");
  return `${h}:${m}`;
}
function rangeMinutes(start, end, step) {
  const out = [];
  for (let m = start; m < end; m += step) out.push(m);
  return out;
}
function overlaps(a, b) {
  return toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}
function mkSlot(day, start, end) {
  return { day, start, end };
}
function freeSlots(weekConfig, fixedEvents, sessionMinutes) {
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
function deadlineUrgency(course, nowISO) {
  if (!course.assessments || course.assessments.length === 0) return 0;
  const now = new Date(nowISO);
  const days = course.assessments.map((a) => {
    const diff = new Date(a.deadlineISO) - now;
    return diff / 864e5;
  });
  const minDays = Math.min(...days);
  return Math.max(0, Math.min(1, 1 - minDays / 14));
}
function preferenceMatch(slot, prefs) {
  const hour = Math.floor(toMinutes(slot.start) / 60);
  if (hour >= 7 && hour < 12) return prefs.preferredTimes.morning ? 1 : 0.5;
  if (hour >= 12 && hour < 17) return prefs.preferredTimes.afternoon ? 1 : 0.5;
  if (hour >= 17 && hour < 22) return prefs.preferredTimes.evening ? 1 : 0;
  return 0;
}
function courseWeight(course) {
  let w = (course.weeklyTargetHours || 0) / 6;
  if (course.assessments && course.assessments.some((a) => a.priority === "high")) w += 0.2;
  return Math.min(1, w);
}
function fatiguePenalty(slot, daySchedule) {
  const end = toMinutes(slot.end);
  let pen = end > toMinutes("20:30") ? 1 : 0;
  if (daySchedule.some((s) => overlaps(s, slot) || s.end === slot.start)) pen += 0.5;
  return pen;
}
function scoreSlot(slot, course, context) {
  const { prefs, nowISO, daySchedule } = context;
  const urgency = deadlineUrgency(course, nowISO);
  const match = preferenceMatch(slot, prefs);
  const weight = courseWeight(course);
  const fatigue = fatiguePenalty(slot, daySchedule);
  const α = 3, β = 2, γ = 2, δ = 1;
  return α * urgency + β * match + γ * weight - δ * fatigue;
}
function enumerateCandidates({ courses, fixedEvents, prefs, weekConfig }) {
  const slots = freeSlots(weekConfig, fixedEvents, prefs.sessionMinutes);
  const candidates = [];
  const nowISO = (/* @__PURE__ */ new Date()).toISOString();
  for (const slot of slots) {
    for (const course of courses) {
      if (course._remaining <= 0) continue;
      const score = scoreSlot(slot, course, { prefs, nowISO, daySchedule: [] });
      candidates.push({ score, slot, courseId: course.id });
    }
  }
  return candidates.sort((a, b) => b.score - a.score);
}
function greedyFill(candidates, ctx) {
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
function toEvents(greedyPlan, courseMap) {
  return greedyPlan.schedule.map(({ slot, courseId }) => {
    const course = courseMap[courseId];
    return {
      id: crypto.randomUUID(),
      title: `Study: ${course.code}`,
      day: slot.day,
      start: slot.start,
      end: slot.end,
      courseId,
      color: course.color || "#3b82f6"
    };
  });
}
function buildSchedule({ courses, fixedEvents, prefs, weekConfig }) {
  const courseMap = Object.fromEntries(
    courses.map((c) => [c.id, { ...c, _remaining: c.weeklyTargetHours || 0 }])
  );
  const candidates = enumerateCandidates({ courses: Object.values(courseMap), fixedEvents, prefs, weekConfig });
  const greedy = greedyFill(candidates, { prefs, courseMap });
  return toEvents(greedy, courseMap);
}
function makeWeekConfig(prefs) {
  return {
    days: weekDays,
    startHour: prefs.workingHours.start,
    endHour: prefs.workingHours.end
  };
}
function collectFixedEvents(state) {
  const fixed = [];
  state.courses.forEach((c) => {
    (c.fixedSlots || []).forEach((fs) => fixed.push(mkSlot(fs.day, fs.start, fs.end)));
  });
  (state.events || []).forEach((e) => {
    if (!e.title.startsWith("Study: ")) fixed.push(mkSlot(e.day, e.start, e.end));
  });
  return fixed;
}
function useScheduler() {
  const { courses, events, prefs, setEvents } = useAppContext();
  function generateSchedule({ replace = true } = {}) {
    const fixed = collectFixedEvents({ courses, events });
    const weekCfg = makeWeekConfig(prefs);
    const newEvents = buildSchedule({
      courses,
      fixedEvents: fixed,
      prefs,
      weekConfig: weekCfg
    });
    setEvents((prev) => {
      const keep = replace ? prev.filter((e) => !e.title.startsWith("Study: ")) : prev;
      return [...keep, ...newEvents];
    });
    return newEvents.length;
  }
  return { generateSchedule };
}
function Progress() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-surface border border-border rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-text-offset", children: "Progress Tracking" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-text-muted", children: "No progress to show yet." }) })
  ] });
}
function Alerts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-surface border border-border rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-text-offset", children: "Alerts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-text-muted", children: "No new alerts." }) })
  ] });
}
function Dashboard() {
  const navigate = useNavigate();
  const { events, courses } = useAppContext();
  const { generateSchedule } = useScheduler();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const courseMap = React.useMemo(
    () => Object.fromEntries(courses.map((c) => [c.id, c])),
    [courses]
  );
  const studyEvents = events.filter((e) => e.title && e.title.startsWith("Study: "));
  const grouped = days.reduce((acc, d) => {
    acc[d] = studyEvents.filter((e) => e.day === d);
    return acc;
  }, {});
  const hasEvents = studyEvents.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => window.open("https://calendar.google.com/calendar/u/0/r", "_blank"),
            children: "Sync with Google Calendar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => navigate("/wizard"), children: "Generate Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => generateSchedule(), children: "Regenerate Schedule" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: hasEvents ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-semibold", children: "Weekly Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-4 text-sm", children: days.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-medium", children: day }),
          grouped[day].map((e) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/task/${e.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center space-x-2 rounded-xl border border-gray-200 p-2 hover:bg-gray-100 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "h-2 w-2 rounded-full",
                      style: { backgroundColor: e.color || "#3b82f6" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: e.title }),
                    ((_a = courseMap[e.courseId]) == null ? void 0 : _a.code) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-gray-500", children: courseMap[e.courseId].code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-xs text-gray-400", children: [
                      e.start,
                      " - ",
                      e.end
                    ] })
                  ] })
                ]
              }
            ) }, e.id);
          })
        ] }, day)) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 h-full flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-text-offset", children: "No events scheduled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-text-muted", children: 'Click the "Generate Plan" button to create your study schedule.' })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Alerts, {})
      ] })
    ] })
  ] });
}
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-BDeU6Qxy.js.map
