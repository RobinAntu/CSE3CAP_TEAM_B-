
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { applyActionCode } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function VerifyEmail() {
  const [message, setMessage] = useState("Verifying your email...");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const actionCode = params.get("oobCode");

    if (actionCode) {
      applyActionCode(auth, actionCode)
        .then(() => {
          setMessage("Email verified successfully! You can now log in.");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          setMessage(`Error verifying email: ${error.message}`);
        });
    } else {
      setMessage("No action code found. Please check the link and try again.");
    }
  }, [location, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9fafb] p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-semibold">{message}</h1>
      </div>
    </div>
  );
}
