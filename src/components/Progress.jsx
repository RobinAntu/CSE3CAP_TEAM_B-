import React from "react";

export default function Progress() {
  return (
    <div className="p-6 bg-surface border border-border rounded-lg">
      <h2 className="text-lg font-semibold text-text-offset">Progress Tracking</h2>
      <div className="mt-4 flex items-center justify-center">
        <p className="text-sm text-text-muted">No progress to show yet.</p>
      </div>
    </div>
  );
}
