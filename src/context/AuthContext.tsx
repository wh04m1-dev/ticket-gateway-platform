"use client";

import { createContext, useState, useContext } from "react";
import { getToken as getStoredToken } from "../utils/token";

interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setTokenState] = useState<string | null>(getStoredToken());

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
    setTokenState(token);
  };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
