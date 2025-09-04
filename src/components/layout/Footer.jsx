import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-2 text-sm text-gray-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>Company · Legal · Contact</div>
        <div className="flex space-x-2 text-lg">
          <span>📘</span>
          <span>🐦</span>
          <span>💼</span>
          <span>📸</span>
        </div>
      </div>
    </footer>
  );
}
