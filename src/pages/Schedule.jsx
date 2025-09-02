import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import SubjectsPanel from "../components/schedule/SubjectsPanel";
import WeekToolbar from "../components/schedule/WeekToolbar";
import WeekGrid from "../components/schedule/WeekGrid";
import SessionEditorModal from "../components/schedule/SessionEditorModal";
import SubjectFormModal from "../components/schedule/SubjectFormModal";
import StatsBar from "../components/schedule/StatsBar";
import Button from "../components/ui/Button";
import { addDays, toMinutes } from "../lib/time";
import { downloadCSV } from "../lib/exporters/csv";
import { downloadICS } from "../lib/exporters/ics";

export default function Schedule(){
  const { courses, setCourses, events, setEvents } = useAppContext();
  const [filter, setFilter] = useState("all");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [kindFilter, setKindFilter] = useState({class:true, study:true});
  const [timeFilter, setTimeFilter] = useState({morning:true, afternoon:true, evening:true});
  const [showSubjectForm, setShowSubjectForm] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);
  const [showSessionForm, setShowSessionForm] = useState(false);
  const [editingSession, setEditingSession] = useState(null);
  const [week, setWeek] = useState(new Date());

  const subjectOptions = courses.map(c=>({value:c.id,label:c.code}));

  function deleteSubject(id){
    if(!window.confirm("Delete subject and its sessions?")) return;
    setCourses(courses.filter(c=>c.id!==id));
    setEvents(events.filter(e=>e.courseId!==id));
    setSelectedSubjects(prev=>prev.filter(sid=>sid!==id));
  }

  function saveSubject(data){
    if(editingSubject){
      setCourses(courses.map(c=> c.id===editingSubject.id ? {...editingSubject, ...data} : c));
    } else {
      setCourses([...courses, {id:crypto.randomUUID(), ...data}]);
    }
    setShowSubjectForm(false);
  }

  function saveSession(data){
    if(editingSession){
      setEvents(events.map(e=> e.id===editingSession.id ? {...editingSession, ...data} : e));
    } else {
      const subj = courses.find(c=>c.id===data.subjectId);
      const title = data.kind==='study' ? `Study: ${subj.code}` : `Class: ${subj.code}`;
      setEvents([...events, {id:crypto.randomUUID(), title, courseId:data.subjectId, day:data.day, start:data.start, end:data.end, kind:data.kind, location:data.location, notes:data.notes}]);
    }
    setShowSessionForm(false);
  }

  const filteredEvents = events.filter(e=>{
    const subjMatch = selectedSubjects.length===0 || selectedSubjects.includes(e.courseId);
    const kind = e.kind || (e.title.startsWith('Study')? 'study':'class');
    if(!kindFilter[kind]) return false;
    const startM = toMinutes(e.start);
    if(!timeFilter.morning && startM < 12*60) return false;
    if(!timeFilter.afternoon && startM >= 12*60 && startM < 17*60) return false;
    if(!timeFilter.evening && startM >= 17*60) return false;
    return subjMatch;
  });

  return (
    <div className="flex h-full">
      <SubjectsPanel subjects={courses} filter={filter} setFilter={setFilter} onAdd={()=>{setEditingSubject(null);setShowSubjectForm(true);}} onEdit={s=>{setEditingSubject(s);setShowSubjectForm(true);}} onDelete={id=>deleteSubject(id)} onExportCSV={()=>downloadCSV(events)} onExportICS={()=>downloadICS(events)} onSelect={id=>setSelectedSubjects([id])} />
      <div className="flex-1 p-4 overflow-auto">
        <WeekToolbar week={week} onPrev={()=>setWeek(addDays(week,-7))} onNext={()=>setWeek(addDays(week,7))} onToday={()=>setWeek(new Date())} subjectFilter={selectedSubjects} setSubjectFilter={setSelectedSubjects} kindFilter={kindFilter} setKindFilter={setKindFilter} timeFilter={timeFilter} setTimeFilter={setTimeFilter} subjectOptions={subjectOptions} />
        <StatsBar events={filteredEvents} subjects={courses} />
        <WeekGrid events={filteredEvents} subjects={courses} />
        <div className="mt-4">
          <Button onClick={()=>{setEditingSession(null);setShowSessionForm(true);}}>Add session</Button>
        </div>
      </div>
      {showSubjectForm && <SubjectFormModal initial={editingSubject} onSave={saveSubject} onClose={()=>setShowSubjectForm(false)} />}
      {showSessionForm && <SessionEditorModal subjects={courses} initial={editingSession} onSave={saveSession} onClose={()=>setShowSessionForm(false)} />}
    </div>
  );
}
