import React from "react";
import { toMinutes, weekDays } from "../../lib/time";
import EventCard from "./EventCard";

const START = 7 * 60;
const END = 22 * 60;
const TOTAL = END - START;

export default function WeekGrid({ events, subjects }) {
    const hours = Array.from({ length: 16 }, (_, i) => i + 7); // 7am to 10pm

  return (
    <div className="grid grid-cols-8 h-[900px] relative">
        <div className="col-span-1 border-r">
            {hours.map(hour => (
                <div key={hour} className="h-[6.25%] text-right pr-2 text-sm text-gray-400 border-b">
                    {hour}:00
                </div>
            ))}
        </div>
      <div className="col-span-7 grid grid-cols-7 h-full relative">
        {weekDays.map((day, idx) => (
            <div key={day} className="border-r border-b relative">
            {events
                .filter((e) => e.day === day)
                .map((ev) => {
                const top = ((toMinutes(ev.start) - START) / TOTAL) * 100;
                const height =
                    ((toMinutes(ev.end) - toMinutes(ev.start)) / TOTAL) * 100;
                const subj = subjects.find((s) => s.id === ev.courseId);
                return (
                    <EventCard
                    key={ev.id}
                    event={ev}
                    subject={subj}
                    style={{ top: `${top}%`, height: `${height}%` }}
                    />
                );
                })}
            </div>
        ))}
      </div>
    </div>
  );
}
