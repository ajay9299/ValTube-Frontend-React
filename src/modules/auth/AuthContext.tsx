import React, { createContext, useContext, useEffect, useState } from "react";
import * as authService from "./authService";

interface User {
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (payload: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const token = localStorage.getItem("access_token");
        console.log("Checking for existing token on app load:", !!token);
        if (token) {
          const me = await authService.fetchProfile();
          console.log("User restored from token:", me);
          setUser(me);
        }
      } catch (e) {
        console.error("Failed to restore user session:", e);
        localStorage.removeItem("access_token");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  async function login(payload: { email: string; password: string }) {
    try {
      const loginData = { username: payload.email, password: payload.password };
      console.log("Attempting login with:", loginData);
      const data = await authService.login(loginData);
      console.log("Login response data:", data);

      if (data?.access_token) {
        console.log("Access token received, storing...");
        localStorage.setItem("access_token", data.access_token);
        const me = await authService.fetchProfile();
        console.log("Profile fetched:", me);
        setUser(me);
        console.log("User set in context");
      } else {
        throw new Error("No access token in response");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem("access_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
