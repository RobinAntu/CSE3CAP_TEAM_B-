export const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]; 

export function toMinutes(hhmm){
  const [h,m] = hhmm.split(":").map(Number);
  return h*60 + m;
}

export function toHHMM(mins){
  const h = Math.floor(mins/60).toString().padStart(2,"0");
  const m = (mins%60).toString().padStart(2,"0");
  return `${h}:${m}`;
}

export function overlaps(a,b){
  return toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}

export function weekStart(date, monday=true){
  const d = new Date(date);
  const day = d.getDay();
  const diff = monday ? (day === 0 ? -6 : 1 - day) : -day;
  d.setDate(d.getDate() + diff);
  d.setHours(0,0,0,0);
  return d;
}

export function addDays(date, days){
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function formatDate(date){
  return date.toISOString().slice(0,10);
}

export function slot(day,start,end){
  return {day,start,end};
}
