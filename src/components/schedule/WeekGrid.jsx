import React from "react";
import { toMinutes, weekDays } from "../../lib/time";
import EventCard from "./EventCard";

const START = 7 * 60;
const END = 22 * 60;
const TOTAL = END - START;

export default function WeekGrid({ events, subjects }){
  return (
    <div className="grid grid-cols-7 border-t border-l h-[900px] relative">
      {weekDays.map((day, idx) => (
        <div key={day} className="border-r border-b relative">
          {events.filter(e=>e.day===day).map(ev=>{
            const top = ((toMinutes(ev.start)-START)/TOTAL)*100;
            const height = ((toMinutes(ev.end)-toMinutes(ev.start))/TOTAL)*100;
            const subj = subjects.find(s=>s.id===ev.courseId);
            return (
              <EventCard key={ev.id} event={ev} subject={subj} style={{top:`${top}%`,height:`${height}%`}} />
            );
          })}
        </div>
      ))}
    </div>
  );
}
