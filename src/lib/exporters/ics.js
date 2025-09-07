import { weekStart, addDays, toMinutes } from "../time";

function formatICSDate(baseDay, time){
  const [h,m] = time.split(":").map(Number);
  const d = new Date(baseDay);
  d.setHours(h,m,0,0);
  return d.toISOString().replace(/[-:]/g,"").split(".")[0] + "Z";
}

export function downloadICS(events){
  const start = weekStart(new Date());
  const lines = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//StudyFlex//EN"];
  events.forEach(ev=>{
    const dayIdx = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(ev.day);
    const base = addDays(start, dayIdx);
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${ev.id}`);
    lines.push(`SUMMARY:${ev.title}`);
    lines.push(`DTSTART:${formatICSDate(base, ev.start)}`);
    lines.push(`DTEND:${formatICSDate(base, ev.end)}`);
    if(ev.location) lines.push(`LOCATION:${ev.location}`);
    lines.push("END:VEVENT");
  });
  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\n")], {type:"text/calendar"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "schedule.ics";
  a.click();
  URL.revokeObjectURL(url);
}
