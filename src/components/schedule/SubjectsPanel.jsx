import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

export default function SubjectsPanel({ subjects, onAdd, onEdit, onDelete, onExportCSV, onExportICS, filter, setFilter, onSelect }){
  const [search, setSearch] = useState("");
  const filtered = subjects.filter(s =>
    (filter === "all" || (filter === "active" ? s.active : !s.active)) &&
    (s.code.toLowerCase().includes(search.toLowerCase()) || s.title.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold mb-4">Subjects</h2>
        <Input placeholder="Search subjects..." value={search} onChange={e=>setSearch(e.target.value)} className="w-full" />
      </div>

      <div className="p-4">
        <div className="flex bg-gray-100 rounded-md p-1">
          {[
            {k:"all",label:"All"},
            {k:"active",label:"Active"},
            {k:"inactive",label:"Inactive"}
          ].map(o=> (
            <button
              key={o.k}
              onClick={()=>setFilter(o.k)}
              className={`w-full text-center text-sm py-1.5 rounded-md transition-colors ${filter===o.k ? 'bg-white shadow-sm text-gray-800 font-medium' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto border-t">
        {filtered.length > 0 ? (
          <ul className="divide-y">
            {filtered.map(s=>(
              <li key={s.id} onClick={()=>onSelect(s.id)} className="p-4 cursor-pointer hover:bg-gray-50 group relative">
                <div className="font-semibold text-gray-800">{s.code}</div>
                <div className="text-sm text-gray-500">{s.title}</div>
                <div className="absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <IconButton size="sm" aria-label="edit subject" onClick={(e) => { e.stopPropagation(); onEdit(s); }}>
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" /></svg>
                  </IconButton>
                  <IconButton size="sm" aria-label="delete subject" onClick={(e) => { e.stopPropagation(); onDelete(s.id); }}>
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </IconButton>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-4 text-sm text-gray-500">No subjects found.</div>
        )}
      </div>
      <div className="p-4 border-t space-y-2">
        <Button onClick={onAdd} className="w-full">Add Subject</Button>
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={onExportCSV} variant="outline">Export CSV</Button>
          <Button onClick={onExportICS} variant="outline">Export ICS</Button>
        </div>
      </div>
    </aside>
  );
}
