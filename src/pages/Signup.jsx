import { useState } from "react";
import { auth } from "@/firebase/client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { isEmail, isPasswordOk } from "@/lib/validators";
import { mapAuthError } from "@/lib/errors/authMap";
import { RedirectIfAuthed } from "@/auth/AuthContext";

export default function Signup() {
  return (
    <RedirectIfAuthed>
      <SignupForm />
    </RedirectIfAuthed>
  );
}

function SignupForm() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setErr("");
    if (!isEmail(email)) return setErr("Please enter a valid email.");
    if (!isPasswordOk(pw)) return setErr("Password must be 6–64 characters.");
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email.trim(), pw);
      window.location.href = "/dashboard";
    } catch (e) {
      setErr(mapAuthError(e.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-4 border border-gray-200"
      >
        <h1 className="text-2xl font-semibold text-center">Sign up</h1>

        <label className="block text-sm font-medium">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500/40"
          />
        </label>

        <label className="block text-sm font-medium">
          Password
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            type="password"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500/40"
          />
        </label>

        {err && <p className="text-sm text-red-600">{err}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Creating…" : "Sign up"}
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a className="text-blue-600 hover:underline" href="/login">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}

