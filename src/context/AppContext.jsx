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

const seedTasks = [
  {
    id: "t1",
    title: "Submit Market Report",
    subjectId: "c1",
    dueISO: new Date(Date.now() + 3 * 86400000).toISOString(),
    priority: "high",
    estimateHrs: 4,
    actualHrs: 0,
    status: "inprogress",
  },
  {
    id: "t2",
    title: "Chapter Review",
    subjectId: "c2",
    dueISO: new Date(Date.now() + 5 * 86400000).toISOString(),
    priority: "medium",
    estimateHrs: 3,
    actualHrs: 0,
    status: "backlog",
  },
  {
    id: "t3",
    title: "Problem Set",
    subjectId: "c3",
    dueISO: new Date(Date.now() + 8 * 86400000).toISOString(),
    priority: "low",
    estimateHrs: 2,
    actualHrs: 0,
    status: "backlog",
  },
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
    tasks: seedTasks,
    prefs: seedPrefs,
  });
  const [courses, setCourses] = useState(stored.courses);
  const [events, setEvents] = useState(stored.events);
  const [tasks, setTasks] = useState(stored.tasks || []);
  const [prefs, setPrefs] = useState(stored.prefs);

  useEffect(() => {
    save("sf_data_v1", { courses, events, tasks, prefs });
  }, [courses, events, tasks, prefs]);

  const addSubject = (subject) => {
    const colors = ["#ef4444", "#10b981", "#f59e0b", "#3b82f6", "#6366f1", "#8b5cf6"];
    const newCourse = {
      id: `c${new Date().getTime()}`,
      code: subject.course_code,
      title: subject.title,
      instructor: "TBD",
      color: colors[Math.floor(Math.random() * colors.length)],
      active: true,
      weeklyTargetHours: 3,
      fixedSlots: [],
      assessments: [],
    };
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  const addAssessment = (course_code, assessment) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        if (course.code === course_code) {
          const newAssessment = {
            title: assessment.title,
            deadlineISO: assessment.deadline,
            estHours: 3, // default value
            priority: "medium", // default value
          };
          return {
            ...course,
            assessments: [...course.assessments, newAssessment],
          };
        }
        return course;
      })
    );
  };

  const addFixedSlot = (course_code, slot) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        if (course.code === course_code) {
          const newSlot = {
            type: slot.type,
            day: slot.day,
            start: slot.start_time,
            end: slot.end_time,
          };
          return {
            ...course,
            fixedSlots: [...course.fixedSlots, newSlot],
          };
        }
        return course;
      })
    );
  };

  const addTask = (task) => {
    const course = courses.find((c) => c.code === task.course_code);
    if (course) {
      const newTask = {
        id: `t${new Date().getTime()}`,
        title: task.title,
        subjectId: course.id,
        dueISO: task.due_date,
        priority: "medium", // default value
        estimateHrs: 2, // default value
        actualHrs: 0,
        status: "backlog",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const addStudySession = (session) => {
    const course = courses.find((c) => c.code === session.course_code);
    if (course) {
        const task = tasks.find((t) => t.title === session.task_title && t.subjectId === course.id);
        if(task) {
          const newSession = {
            id: `e${new Date().getTime()}`,
            title: `Study: ${course.code}`,
            day: new Date(session.start_time).toLocaleString('en-US', { weekday: 'short' }),
            start: new Date(session.start_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
            end: new Date(session.end_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
            courseId: course.id,
            kind: "study",
          };
          setEvents((prevEvents) => [...prevEvents, newSession]);
        }
    }
  };

  return (
    <AppContext.Provider value={{ courses, setCourses, events, setEvents, tasks, setTasks, prefs, setPrefs, addSubject, addAssessment, addFixedSlot, addTask, addStudySession }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
