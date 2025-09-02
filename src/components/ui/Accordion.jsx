import React, { useState } from "react";

export function Accordion({ children }) {
  return <div className="divide-y divide-gray-200">{children}</div>;
}

export function AccordionItem({ title, children, defaultOpen = false, icon }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{title}</span>
        {icon}
        <svg
          className={`h-4 w-4 transform transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-4 pt-2 space-y-4">{children}</div>}
    </div>
  );
}
