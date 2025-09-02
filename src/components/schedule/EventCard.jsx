import React from "react";

export default function EventCard({ event, subject, style }){
  const color = subject?.color || "#3b82f6";
  const isStudy = event.kind === "study" || event.title?.startsWith("Study:");
  return (
    <div
      className={`absolute px-1 py-0.5 text-xs rounded overflow-hidden ${isStudy ? "text-white" : "border"}`}
      style={{
        backgroundColor: isStudy ? color : "white",
        borderColor: color,
        color: isStudy ? "white" : "black",
        left: 2,
        right: 2,
        ...style,
      }}
    >
      {isStudy ? `Study: ${subject?.code || ""}` : `Class: ${subject?.code || ""}`}
    </div>
  );
}
