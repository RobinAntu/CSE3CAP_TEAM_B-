import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("sf_auth_v1");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    const fakeUser = { id: Date.now().toString(), email };
    localStorage.setItem("sf_auth_v1", JSON.stringify(fakeUser));
    setUser(fakeUser);
    return Promise.resolve();
  };

  const register = (name, email, password) => {
    return login(email, password).then(() => {
      setUser((u) => ({ ...u, name }));
    });
  };

  const logout = () => {
    localStorage.removeItem("sf_auth_v1");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
