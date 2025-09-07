import { weekDays } from "../time";

export function downloadCSV(events){
  const headers = ["subject","kind","day","start","end","location","notes","recur_freq","recur_interval","recur_until"];
  const rows = events.map(e=>[
    e.courseId || "",
    e.kind || "",
    e.day,
    e.start,
    e.end,
    e.location || "",
    e.notes || "",
    e.recur?.freq || "",
    e.recur?.interval || "",
    e.recur?.until || ""
  ]);
  const csv = [headers.join(","), ...rows.map(r=>r.join(","))].join("\n");
  const blob = new Blob([csv], {type:"text/csv"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "schedule.csv";
  a.click();
  URL.revokeObjectURL(url);
}
