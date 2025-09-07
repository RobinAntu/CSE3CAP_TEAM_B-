import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("sf_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email) => {
    const u = { email };
    setUser(u);
    localStorage.setItem("sf_user", JSON.stringify(u));
  };
  const signup = login;
  const logout = () => {
    setUser(null);
    localStorage.removeItem("sf_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
