import React, { createContext, useContext, useEffect, useState } from "react";
import * as authService from "./authService";

interface User {
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  login: (payload: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   async function init() {
  //     try {
  //       const me = await authService.fetchProfile();
  //       setUser(me);
  //     } catch (e) {
  //       setUser(null);
  //     }
  //   }
  //   init();
  // }, []);

  async function login(payload: { email: string; password: string }) {
    const loginData = {username: payload.email, password: payload.password} 
    const data = await authService.login(loginData);
    if (data?.access_token) {
      localStorage.setItem("access_token", data.access_token);
      const me = await authService.fetchProfile();
      setUser(me);
    }
  }

  function logout() {
    localStorage.removeItem("access_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
