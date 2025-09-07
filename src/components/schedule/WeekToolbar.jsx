import React from "react";
import Button from "../ui/Button";
import { format } from "date-fns";
import { weekStart, addDays } from "../../lib/time";

export default function WeekToolbar({ week, onPrev, onNext, onToday, subjectFilter, setSubjectFilter, kindFilter, setKindFilter, timeFilter, setTimeFilter, subjectOptions=[] }){
  const start = weekStart(week);
  const end = addDays(start,6);
  const range = `${format(start,'MMM d')} - ${format(end,'MMM d')}`;
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between mb-2">
      <div className="flex items-center space-x-2">
        <Button onClick={onPrev}>‹</Button>
        <Button onClick={onToday}>Today</Button>
        <Button onClick={onNext}>›</Button>
        <div className="ml-4 font-semibold">{range}</div>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <select multiple value={subjectFilter} onChange={e=>setSubjectFilter(Array.from(e.target.selectedOptions).map(o=>o.value))} className="border rounded p-1">
          {subjectOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={kindFilter.class} onChange={e=>setKindFilter({...kindFilter,class:e.target.checked})} />
          <span>Class</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={kindFilter.study} onChange={e=>setKindFilter({...kindFilter,study:e.target.checked})} />
          <span>Study</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={timeFilter.morning} onChange={e=>setTimeFilter({...timeFilter,morning:e.target.checked})} />
          <span>Morning</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={timeFilter.afternoon} onChange={e=>setTimeFilter({...timeFilter,afternoon:e.target.checked})} />
          <span>Afternoon</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={timeFilter.evening} onChange={e=>setTimeFilter({...timeFilter,evening:e.target.checked})} />
          <span>Evening</span>
        </label>
        <Button onClick={()=>window.print()} className="ml-2">Print</Button>
      </div>
    </div>
  );
}
