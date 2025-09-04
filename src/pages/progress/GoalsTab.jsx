import React, { useState } from "react";

export default function GoalsTab() {
  const [notes, setNotes] = useState("");
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">Reflection Notes</h3>
      <textarea
        className="w-full rounded border border-gray-300 p-2"
        rows="5"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your study reflections here..."
      />
    </div>
  );
}
