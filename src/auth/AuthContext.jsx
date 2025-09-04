import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem("sf_users")) || [];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("sf_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    const users = loadUsers();
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem("sf_user", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const signup = (info) => {
    const users = loadUsers();
    if (users.some((u) => u.email === info.email)) return false;
    users.push(info);
    localStorage.setItem("sf_users", JSON.stringify(users));
    return login(info.email, info.password);
  };

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
