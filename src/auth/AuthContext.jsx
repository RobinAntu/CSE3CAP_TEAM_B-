import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/client";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setReady(true);
    });
    return () => unsub();
  }, []);

  const value = { user, ready, logout: () => signOut(auth) };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);

// Route guards
export function RequireAuth({ children }) {
  const { user, ready } = useAuth();
  if (!ready) return null; // or spinner
  return user ? children : ((window.location.href = "/login"), null);
}

export function RedirectIfAuthed({ children }) {
  const { user, ready } = useAuth();
  if (!ready) return null;
  return user ? ((window.location.href = "/dashboard"), null) : children;
}

