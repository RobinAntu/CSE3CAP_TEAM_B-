import { useState, useRef } from "react";
import { auth } from "@/firebase/client";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { isEmail, isPasswordOk } from "@/lib/validators";
import { mapAuthError } from "@/lib/errors/authMap";
import { RedirectIfAuthed } from "@/auth/AuthContext";

export default function Login() {
  return (
    <RedirectIfAuthed>
      <LoginForm />
    </RedirectIfAuthed>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const btnRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setErr("");

    // Client validation first
    if (!isEmail(email)) return setErr("Please enter a valid email.");
    if (!isPasswordOk(pw)) return setErr("Password must be 6–64 characters.");

    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email.trim(), pw);
      window.location.href = "/dashboard";
      return user;
    } catch (e) {
      setErr(mapAuthError(e.code));
    } finally {
      setLoading(false);
      btnRef.current?.focus();
    }
  }

  async function loginGoogle() {
    try {
      setErr("");
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
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
        <div className="text-center space-y-1">
          <div className="mx-auto h-10 w-10 rounded-md bg-blue-500" />
          <h1 className="text-2xl font-semibold">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </div>

        <label className="block text-sm font-medium">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500/40"
          />
        </label>

        <label className="block text-sm font-medium">
          Password
          <div className="mt-1 relative">
            <input
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-16 focus:ring-2 focus:ring-blue-500/40"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        {err && <p className="text-sm text-red-600">{err}</p>}

        <button
          ref={btnRef}
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Logging in…" : "Login"}
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <button
          type="button"
          onClick={loginGoogle}
          className="w-full h-11 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <div className="flex justify-between text-sm">
          <a className="text-blue-600 hover:underline" href="/forgot">
            Forgot password?
          </a>
          <a className="text-blue-600 hover:underline" href="/signup">
            Don’t have an account? Sign up
          </a>
        </div>
        <p className="text-center text-xs text-gray-400">Made with Visily</p>
      </form>
    </div>
  );
}

