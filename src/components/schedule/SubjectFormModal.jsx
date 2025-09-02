import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SubjectFormModal({ onSave, onClose, initial }){
  const [form, setForm] = useState(initial || { code:"", title:"", instructor:"", color:"#3b82f6", active:true });
  function update(k,v){ setForm({...form,[k]:v}); }
  function submit(){ if(form.code && form.title) onSave(form); }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="bg-white p-4 rounded w-80 space-y-2">
        <h2 className="text-lg font-semibold">Subject</h2>
        <label className="block text-sm">Code<Input value={form.code} onChange={e=>update('code',e.target.value)} /></label>
        <label className="block text-sm">Title<Input value={form.title} onChange={e=>update('title',e.target.value)} /></label>
        <label className="block text-sm">Instructor<Input value={form.instructor} onChange={e=>update('instructor',e.target.value)} /></label>
        <label className="block text-sm">Color<Input type="color" value={form.color} onChange={e=>update('color',e.target.value)} /></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" checked={form.active} onChange={e=>update('active',e.target.checked)} /><span>Active</span></label>
        <div className="flex justify-end space-x-2 pt-2">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={submit}>Save</Button>
        </div>
      </div>
    </div>
  );
}
