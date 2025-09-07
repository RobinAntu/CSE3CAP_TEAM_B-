import React from "react";
import { toMinutes } from "../../lib/time";

export default function StatsBar({ events, subjects }){
  const studyEvents = events.filter(e=>e.kind==='study' || e.title.startsWith('Study'));
  const totalStudyMins = studyEvents.reduce((sum,e)=> sum + (toMinutes(e.end)-toMinutes(e.start)),0);
  const perSubject = subjects.map(s=>({
    subject:s,
    mins: studyEvents.filter(e=>e.courseId===s.id).reduce((sum,e)=> sum + (toMinutes(e.end)-toMinutes(e.start)),0)
  }));
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-3 mb-2 shadow-sm text-sm flex items-center space-x-4 overflow-x-auto">
      <div>Total study: {(totalStudyMins/60).toFixed(1)}h</div>
      {perSubject.map(p=> (
        <div key={p.subject.id} className="flex items-center space-x-1">
          <span className="h-2 w-2 rounded-full" style={{backgroundColor:p.subject.color}}></span>
          <span>{p.subject.code}: {(p.mins/60).toFixed(1)}h</span>
        </div>
      ))}
    </div>
  );
}
