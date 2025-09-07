import { eachDayOfInterval, addDays, format } from "date-fns";

export function buildBurndown(tasks, range) {
  const days = eachDayOfInterval(range);
  const remaining = tasks.filter(t => t.status !== "done");
  let total = remaining.reduce((sum, t) => sum + (t.estimateHrs || 0) - (t.actualHrs || 0), 0);
  const daily = [];
  const ideal = total / days.length;
  for (let i = 0; i < days.length; i++) {
    daily.push({
      date: format(days[i], "yyyy-MM-dd"),
      remainingHours: Math.max(total - ideal * i, 0),
      idealHours: Math.max(total - ideal * i, 0),
    });
  }
  return daily;
}
