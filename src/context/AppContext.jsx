import React, { createContext, useContext, useState, useEffect } from "react";
import { load, save } from "../lib/storage";

const seedCourses = [
  {
    id: "c1",
    code: "BUSN301",
    title: "Business Strategy",
    instructor: "Dr. Adams",
    color: "#ef4444",
    active: true,
    weeklyTargetHours: 4,
    fixedSlots: [{ type: "lecture", day: "Mon", start: "09:00", end: "10:00" }],
    assessments: [
      {
        title: "Market Report",
        deadlineISO: new Date(Date.now() + 7 * 86400000).toISOString(),
        estHours: 4,
        priority: "high",
      },
    ],
  },
  {
    id: "c2",
    code: "PSYCH205",
    title: "Psychology",
    instructor: "Dr. Grey",
    color: "#10b981",
    active: true,
    weeklyTargetHours: 4,
    fixedSlots: [{ type: "tutorial", day: "Wed", start: "11:00", end: "12:00" }],
    assessments: [
      {
        title: "Chapter Review",
        deadlineISO: new Date(Date.now() + 10 * 86400000).toISOString(),
        estHours: 3,
        priority: "medium",
      },
    ],
  },
  {
    id: "c3",
    code: "MATH150",
    title: "Calculus",
    instructor: "Prof. Lin",
    color: "#f59e0b",
    active: true,
    weeklyTargetHours: 3,
    fixedSlots: [{ type: "lecture", day: "Thu", start: "10:00", end: "11:00" }],
    assessments: [
      {
        title: "Problem Set",
        deadlineISO: new Date(Date.now() + 12 * 86400000).toISOString(),
        estHours: 2,
        priority: "low",
      },
    ],
  },
];

const seedEvents = [
  { id: "e1", title: "Lecture", day: "Mon", start: "09:00", end: "10:00", courseId: "c1", kind: "class" },
  { id: "e2", title: "Tutorial", day: "Wed", start: "11:00", end: "12:00", courseId: "c2", kind: "class" },
  { id: "e3", title: "Lecture", day: "Thu", start: "10:00", end: "11:00", courseId: "c3", kind: "class" },
  { id: "e4", title: "Study: BUSN301", day: "Mon", start: "10:30", end: "11:30", courseId: "c1", kind: "study" },
];

const seedPrefs = {
  timeZone: "Australia/Melbourne",
  sessionMinutes: 60,
  dailyMaxHours: 4,
  preferredTimes: { morning: true, afternoon: true, evening: false },
  snapMinutes: 30,
  workingHours: { start: 7, end: 22 },
};

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const stored = load("sf_data_v1", {
    courses: seedCourses,
    events: seedEvents,
    prefs: seedPrefs,
  });
  const [courses, setCourses] = useState(stored.courses);
  const [events, setEvents] = useState(stored.events);
  const [prefs, setPrefs] = useState(stored.prefs);

  useEffect(() => {
    save("sf_data_v1", { courses, events, prefs });
  }, [courses, events, prefs]);

  return (
    <AppContext.Provider value={{ courses, setCourses, events, setEvents, prefs, setPrefs }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
