import { useState } from "react";
import { buildSchedule, collectFixedEvents, makeWeekConfig } from "../lib/scheduler";
import { useAppContext } from "../context/AppContext";

export default function useScheduler() {
  const { courses, events, prefs, setEvents } = useAppContext();
  const [isGenerating, setIsGenerating] = useState(false);

  async function generateSchedule({ replace = true } = {}) {
    setIsGenerating(true);
    const fixed = collectFixedEvents({ courses, events });
    const weekCfg = makeWeekConfig(prefs);
    const newEvents = await buildSchedule({
      courses,
      fixedEvents: fixed,
      prefs,
      weekConfig: weekCfg,
    });
    setEvents((prev) => {
      const keep = replace ? prev.filter((e) => !e.title.startsWith("Study: ")) : prev;
      return [...keep, ...newEvents];
    });
    setIsGenerating(false);
    return newEvents.length;
  }

  return { generateSchedule, isGenerating };
}
