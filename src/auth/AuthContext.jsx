
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../lib/firebase"; // Import auth from your firebase config
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = () => {
    // No need to manually set user here, onAuthStateChanged will handle it
  };
  const signup = login;
  const logout = async () => {
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
