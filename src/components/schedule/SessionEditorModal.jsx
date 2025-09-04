import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

export default function SessionEditorModal({ subjects, onSave, onClose, initial }){
  const [form, setForm] = useState(initial || { subjectId: subjects[0]?.id || "", kind: "study", day: "Mon", start: "09:00", end: "10:00" });
  function update(k,v){ setForm({...form,[k]:v}); }
  function submit(){ onSave(form); }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="bg-white p-4 rounded w-80 space-y-2">
        <h2 className="text-lg font-semibold">Session</h2>
        <label className="block text-sm">Subject
          <select value={form.subjectId} onChange={e=>update('subjectId',e.target.value)} className="w-full border rounded p-1">
            {subjects.map(s=> <option key={s.id} value={s.id}>{s.code}</option>)}
          </select>
        </label>
        <label className="block text-sm">Kind
          <select value={form.kind} onChange={e=>update('kind',e.target.value)} className="w-full border rounded p-1">
            <option value="class">Class</option>
            <option value="study">Study</option>
          </select>
        </label>
        <label className="block text-sm">Day
          <select value={form.day} onChange={e=>update('day',e.target.value)} className="w-full border rounded p-1">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=> <option key={d} value={d}>{d}</option>)}
          </select>
        </label>
        <div className="flex space-x-2">
          <label className="block text-sm flex-1">Start
            <Input type="time" value={form.start} onChange={e=>update('start',e.target.value)} />
          </label>
          <label className="block text-sm flex-1">End
            <Input type="time" value={form.end} onChange={e=>update('end',e.target.value)} />
          </label>
        </div>
        <div className="flex justify-end space-x-2 pt-2">
          <Button onClick={onClose} type="button" variant="secondary">Cancel</Button>
          <Button onClick={submit} type="button">Save</Button>
        </div>
      </div>
    </div>
  );
}
