import { subWeeks, eachDayOfInterval, startOfWeek, endOfWeek, format } from "date-fns";
import { minutesByDay } from "./progressMath";
import { weekDays } from "../time";

export function buildHeatmap(events, endDate = new Date(), weeks = 8) {
  const start = startOfWeek(subWeeks(endDate, weeks - 1));
  const range = { start, end: endOfWeek(endDate) };
  const data = [];
  const daily = minutesByDay(events, range);
  const allDays = eachDayOfInterval(range);
  for (const d of allDays) {
    const wd = weekDays[d.getDay() === 0 ? 6 : d.getDay() - 1];
    const idx = weekDays.indexOf(wd);
    const minutes = daily[idx] ? daily[idx].minutes : 0;
    data.push({ date: format(d, "yyyy-MM-dd"), minutes });
  }
  return data;
}
