export function generatePlan(weekly) {
  const hours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];
  const plan = [];
  Object.entries(weekly).forEach(([day, tasks]) => {
    tasks.forEach((t, idx) => {
      const start = hours[idx % hours.length];
      const endIndex = (idx % hours.length) + 1;
      const end = endIndex < hours.length ? hours[endIndex] : "17:00";
      plan.push({ title: t.title, day, start, end });
    });
  });
  return plan;
}
