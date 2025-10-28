import { j as jsxRuntimeExports, r as reactExports, g as useAppContext } from "./index-CuFUwhe-.js";
import { I as Input } from "./Input-BjCZdp41.js";
import { B as Button } from "./Button-CSPNikPN.js";
import { w as weekStart, a as addDays, f as format, b as weekDays, t as toMinutes } from "./time-K38avKg6.js";
function IconButton({ className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: `inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${className}`,
      ...props
    }
  );
}
function SubjectsPanel({ subjects, onAdd, onEdit, onDelete, onExportCSV, onExportICS, filter, setFilter, onSelect }) {
  const [search, setSearch] = reactExports.useState("");
  const filtered = subjects.filter(
    (s) => (filter === "all" || (filter === "active" ? s.active : !s.active)) && (s.code.toLowerCase().includes(search.toLowerCase()) || s.title.toLowerCase().includes(search.toLowerCase()))
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold mb-4", children: "Subjects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search subjects...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-gray-100 rounded-md p-1", children: [
      { k: "all", label: "All" },
      { k: "active", label: "Active" },
      { k: "inactive", label: "Inactive" }
    ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setFilter(o.k),
        className: `w-full text-center text-sm py-1.5 rounded-md transition-colors ${filter === o.k ? "bg-white shadow-sm text-gray-800 font-medium" : "text-gray-500 hover:bg-gray-200"}`,
        children: o.label
      },
      o.k
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto border-t", children: filtered.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y", children: filtered.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { onClick: () => onSelect(s.id), className: "p-4 cursor-pointer hover:bg-gray-50 group relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-800", children: s.code }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "sm", "aria-label": "edit subject", onClick: (e) => {
          e.stopPropagation();
          onEdit(s);
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "sm", "aria-label": "delete subject", onClick: (e) => {
          e.stopPropagation();
          onDelete(s.id);
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) })
      ] })
    ] }, s.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-sm text-gray-500", children: "No subjects found." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onAdd, className: "w-full", children: "Add Subject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onExportCSV, variant: "outline", children: "Export CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onExportICS, variant: "outline", children: "Export ICS" })
      ] })
    ] })
  ] });
}
function WeekToolbar({ week, onPrev, onNext, onToday, subjectFilter, setSubjectFilter, kindFilter, setKindFilter, timeFilter, setTimeFilter, subjectOptions = [] }) {
  const start = weekStart(week);
  const end = addDays(start, 6);
  const range = `${format(start, "MMM d")} - ${format(end, "MMM d")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-2 md:flex-row md:items-center md:justify-between mb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onPrev, children: "‹" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onToday, children: "Today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onNext, children: "›" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 font-semibold", children: range })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { multiple: true, value: subjectFilter, onChange: (e) => setSubjectFilter(Array.from(e.target.selectedOptions).map((o) => o.value)), className: "border rounded p-1", children: subjectOptions.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: kindFilter.class, onChange: (e) => setKindFilter({ ...kindFilter, class: e.target.checked }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Class" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: kindFilter.study, onChange: (e) => setKindFilter({ ...kindFilter, study: e.target.checked }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Study" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: timeFilter.morning, onChange: (e) => setTimeFilter({ ...timeFilter, morning: e.target.checked }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Morning" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: timeFilter.afternoon, onChange: (e) => setTimeFilter({ ...timeFilter, afternoon: e.target.checked }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Afternoon" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: timeFilter.evening, onChange: (e) => setTimeFilter({ ...timeFilter, evening: e.target.checked }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Evening" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => window.print(), className: "ml-2", children: "Print" })
    ] })
  ] });
}
function EventCard({ event, subject, style }) {
  var _a;
  const color = (subject == null ? void 0 : subject.color) || "#3b82f6";
  const isStudy = event.kind === "study" || ((_a = event.title) == null ? void 0 : _a.startsWith("Study:"));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `absolute px-1 py-0.5 text-xs rounded overflow-hidden ${isStudy ? "text-white" : "border"}`,
      style: {
        backgroundColor: isStudy ? color : "white",
        borderColor: color,
        color: isStudy ? "white" : "black",
        left: 2,
        right: 2,
        ...style
      },
      children: isStudy ? `Study: ${(subject == null ? void 0 : subject.code) || ""}` : `Class: ${(subject == null ? void 0 : subject.code) || ""}`
    }
  );
}
const START = 7 * 60;
const END = 22 * 60;
const TOTAL = END - START;
function WeekGrid({ events, subjects }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 h-[900px] relative", children: weekDays.map((day, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-r border-b relative", children: events.filter((e) => e.day === day).map((ev) => {
    const top = (toMinutes(ev.start) - START) / TOTAL * 100;
    const height = (toMinutes(ev.end) - toMinutes(ev.start)) / TOTAL * 100;
    const subj = subjects.find((s) => s.id === ev.courseId);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EventCard,
      {
        event: ev,
        subject: subj,
        style: { top: `${top}%`, height: `${height}%` }
      },
      ev.id
    );
  }) }, day)) });
}
function SessionEditorModal({ subjects, onSave, onClose, initial }) {
  var _a;
  const [form, setForm] = reactExports.useState(initial || { subjectId: ((_a = subjects[0]) == null ? void 0 : _a.id) || "", kind: "study", day: "Mon", start: "09:00", end: "10:00" });
  function update(k, v) {
    setForm({ ...form, [k]: v });
  }
  function submit() {
    onSave(form);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded w-80 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Session" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Subject",
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.subjectId, onChange: (e) => update("subjectId", e.target.value), className: "w-full border rounded p-1", children: subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id, children: s.code }, s.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Kind",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.kind, onChange: (e) => update("kind", e.target.value), className: "w-full border rounded p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "class", children: "Class" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "study", children: "Study" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Day",
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.day, onChange: (e) => update("day", e.target.value), className: "w-full border rounded p-1", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d, children: d }, d)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm flex-1", children: [
        "Start",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "time", value: form.start, onChange: (e) => update("start", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm flex-1", children: [
        "End",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "time", value: form.end, onChange: (e) => update("end", e.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-2 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, type: "button", variant: "secondary", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, type: "button", children: "Save" })
    ] })
  ] }) });
}
function SubjectFormModal({ onSave, onClose, initial }) {
  const [form, setForm] = reactExports.useState(
    initial || {
      code: "",
      title: "",
      instructor: "",
      color: "#3b82f6",
      active: true,
      weeklyTargetHours: 3
    }
  );
  function update(k, v) {
    setForm({ ...form, [k]: v });
  }
  function submit() {
    if (form.code && form.title) onSave(form);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded w-80 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Subject" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Code",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.code, onChange: (e) => update("code", e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Title",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.title, onChange: (e) => update("title", e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Instructor",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.instructor, onChange: (e) => update("instructor", e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Color",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "color", value: form.color, onChange: (e) => update("color", e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
      "Weekly Target Hours",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          min: "0",
          value: form.weeklyTargetHours,
          onChange: (e) => update("weeklyTargetHours", Number(e.target.value))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.active, onChange: (e) => update("active", e.target.checked) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-2 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, children: "Save" })
    ] })
  ] }) });
}
function StatsBar({ events, subjects }) {
  const studyEvents = events.filter((e) => e.kind === "study" || e.title.startsWith("Study"));
  const totalStudyMins = studyEvents.reduce((sum, e) => sum + (toMinutes(e.end) - toMinutes(e.start)), 0);
  const perSubject = subjects.map((s) => ({
    subject: s,
    mins: studyEvents.filter((e) => e.courseId === s.id).reduce((sum, e) => sum + (toMinutes(e.end) - toMinutes(e.start)), 0)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-200 rounded-2xl p-3 mb-2 shadow-sm text-sm flex items-center space-x-4 overflow-x-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Total study: ",
      (totalStudyMins / 60).toFixed(1),
      "h"
    ] }),
    perSubject.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { backgroundColor: p.subject.color } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        p.subject.code,
        ": ",
        (p.mins / 60).toFixed(1),
        "h"
      ] })
    ] }, p.subject.id))
  ] });
}
function downloadCSV(events) {
  const headers = ["subject", "kind", "day", "start", "end", "location", "notes", "recur_freq", "recur_interval", "recur_until"];
  const rows = events.map((e) => {
    var _a, _b, _c;
    return [
      e.courseId || "",
      e.kind || "",
      e.day,
      e.start,
      e.end,
      e.location || "",
      e.notes || "",
      ((_a = e.recur) == null ? void 0 : _a.freq) || "",
      ((_b = e.recur) == null ? void 0 : _b.interval) || "",
      ((_c = e.recur) == null ? void 0 : _c.until) || ""
    ];
  });
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "schedule.csv";
  a.click();
  URL.revokeObjectURL(url);
}
function formatICSDate(baseDay, time) {
  const [h, m] = time.split(":").map(Number);
  const d = new Date(baseDay);
  d.setHours(h, m, 0, 0);
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
function downloadICS(events) {
  const start = weekStart(/* @__PURE__ */ new Date());
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//StudyFlex//EN"];
  events.forEach((ev) => {
    const dayIdx = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(ev.day);
    const base = addDays(start, dayIdx);
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${ev.id}`);
    lines.push(`SUMMARY:${ev.title}`);
    lines.push(`DTSTART:${formatICSDate(base, ev.start)}`);
    lines.push(`DTEND:${formatICSDate(base, ev.end)}`);
    if (ev.location) lines.push(`LOCATION:${ev.location}`);
    lines.push("END:VEVENT");
  });
  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\n")], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "schedule.ics";
  a.click();
  URL.revokeObjectURL(url);
}
function Schedule() {
  const { courses, setCourses, events, setEvents } = useAppContext();
  const [filter, setFilter] = reactExports.useState("all");
  const [selectedSubjects, setSelectedSubjects] = reactExports.useState([]);
  const [kindFilter, setKindFilter] = reactExports.useState({ class: true, study: true });
  const [timeFilter, setTimeFilter] = reactExports.useState({ morning: true, afternoon: true, evening: true });
  const [showSubjectForm, setShowSubjectForm] = reactExports.useState(false);
  const [editingSubject, setEditingSubject] = reactExports.useState(null);
  const [showSessionForm, setShowSessionForm] = reactExports.useState(false);
  const [editingSession, setEditingSession] = reactExports.useState(null);
  const [week, setWeek] = reactExports.useState(/* @__PURE__ */ new Date());
  const subjectOptions = courses.map((c) => ({ value: c.id, label: c.code }));
  function deleteSubject(id) {
    if (!window.confirm("Delete subject and its sessions?")) return;
    setCourses(courses.filter((c) => c.id !== id));
    setEvents(events.filter((e) => e.courseId !== id));
    setSelectedSubjects((prev) => prev.filter((sid) => sid !== id));
  }
  function saveSubject(data) {
    if (editingSubject) {
      setCourses(courses.map((c) => c.id === editingSubject.id ? { ...editingSubject, ...data } : c));
    } else {
      setCourses([...courses, { id: crypto.randomUUID(), ...data }]);
    }
    setShowSubjectForm(false);
  }
  function saveSession(data) {
    if (editingSession) {
      setEvents(events.map((e) => e.id === editingSession.id ? { ...editingSession, ...data } : e));
    } else {
      const subj = courses.find((c) => c.id === data.subjectId);
      const title = data.kind === "study" ? `Study: ${subj.code}` : `Class: ${subj.code}`;
      setEvents([...events, { id: crypto.randomUUID(), title, courseId: data.subjectId, day: data.day, start: data.start, end: data.end, kind: data.kind, location: data.location, notes: data.notes }]);
    }
    setShowSessionForm(false);
  }
  const filteredEvents = events.filter((e) => {
    const subjMatch = selectedSubjects.length === 0 || selectedSubjects.includes(e.courseId);
    const kind = e.kind || (e.title.startsWith("Study") ? "study" : "class");
    if (!kindFilter[kind]) return false;
    const startM = toMinutes(e.start);
    if (!timeFilter.morning && startM < 12 * 60) return false;
    if (!timeFilter.afternoon && startM >= 12 * 60 && startM < 17 * 60) return false;
    if (!timeFilter.evening && startM >= 17 * 60) return false;
    return subjMatch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubjectsPanel, { subjects: courses, filter, setFilter, onAdd: () => {
      setEditingSubject(null);
      setShowSubjectForm(true);
    }, onEdit: (s) => {
      setEditingSubject(s);
      setShowSubjectForm(true);
    }, onDelete: (id) => deleteSubject(id), onExportCSV: () => downloadCSV(events), onExportICS: () => downloadICS(events), onSelect: (id) => setSelectedSubjects([id]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4 overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeekToolbar, { week, onPrev: () => setWeek(addDays(week, -7)), onNext: () => setWeek(addDays(week, 7)), onToday: () => setWeek(/* @__PURE__ */ new Date()), subjectFilter: selectedSubjects, setSubjectFilter: setSelectedSubjects, kindFilter, setKindFilter, timeFilter, setTimeFilter, subjectOptions }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatsBar, { events: filteredEvents, subjects: courses }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7", children: weekDays.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-semibold text-gray-600 p-2 border-b", children: day }, day)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeekGrid, { events: filteredEvents, subjects: courses }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => {
        setEditingSession(null);
        setShowSessionForm(true);
      }, children: "Add session" }) })
    ] }),
    showSubjectForm && /* @__PURE__ */ jsxRuntimeExports.jsx(SubjectFormModal, { initial: editingSubject, onSave: saveSubject, onClose: () => setShowSubjectForm(false) }),
    showSessionForm && /* @__PURE__ */ jsxRuntimeExports.jsx(SessionEditorModal, { subjects: courses, initial: editingSession, onSave: saveSession, onClose: () => setShowSessionForm(false) })
  ] });
}
export {
  Schedule as default
};
//# sourceMappingURL=Schedule-BHJuTD_x.js.map
