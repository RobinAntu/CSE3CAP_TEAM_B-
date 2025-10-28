import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wizard from "../wizard/Wizard";

export default function Page({ children }) {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#f9fafb]">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl space-y-8">{children}</div>
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={() => setIsWizardOpen(!isWizardOpen)} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          AI Wizard
        </button>
      </div>
      {isWizardOpen && (
        <div className="fixed bottom-16 right-4 w-96 bg-white p-4 rounded-lg shadow-lg">
          <Wizard />
        </div>
      )}
    </div>
  );
}
