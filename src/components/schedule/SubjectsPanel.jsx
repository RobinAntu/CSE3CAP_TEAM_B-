import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function SubjectsPanel({ subjects, onAdd, onEdit, onDelete, onExportCSV, onExportICS, filter, setFilter, onSelect }){
  const [search, setSearch] = useState("");
  const filtered = subjects.filter(s =>
    (filter === "all" || (filter === "active" ? s.active : !s.active)) &&
    (s.code.toLowerCase().includes(search.toLowerCase()) || s.title.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <aside className="w-64 border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Subjects</h2>
        <Input placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} className="w-full" />
        <div className="flex space-x-2 mt-2 text-sm">
          {[
            {k:"all",label:"All"},
            {k:"active",label:"Active"},
            {k:"inactive",label:"Inactive"}
          ].map(o=> (
            <button key={o.k} onClick={()=>setFilter(o.k)} className={`px-2 py-1 rounded ${filter===o.k?"bg-blue-600 text-white":"bg-gray-100"}`}>
              {o.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {filtered.map(s => (
          <div key={s.id} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={()=>onSelect&&onSelect(s.id)}>
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full" style={{backgroundColor:s.color}}></span>
              <div>
                <div className="text-sm font-medium">{s.code}</div>
                <div className="text-xs text-gray-500">{s.title}</div>
              </div>
            </div>
            <div className="space-x-1">
              <button onClick={e=>{e.stopPropagation();onEdit(s);}} aria-label="edit">✏️</button>
              <button onClick={e=>{e.stopPropagation();onDelete&&onDelete(s.id);}} aria-label="delete">🗑️</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t text-sm space-y-2">
        <Button className="w-full" onClick={onAdd}>Add subject</Button>
        <div className="text-xs text-gray-500 flex justify-between">
          <span>● class ■ study</span>
          <span>
            <button onClick={onExportCSV} className="underline mr-2">CSV</button>
            <button onClick={onExportICS} className="underline">ICS</button>
          </span>
        </div>
      </div>
    </aside>
  );
}
