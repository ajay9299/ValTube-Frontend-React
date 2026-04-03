import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../modules/auth/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to={ROUTES.HOME}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700"
          >
            ValTube
          </Link>
          <nav className="flex items-center gap-6">
            {user ? (
              <>
                <Link
                  to={ROUTES.DASHBOARD}
                  className="text-gray-600 hover:text-gray-900 font-medium transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={ROUTES.LOGIN}
                  className="text-gray-600 hover:text-gray-900 font-medium transition"
                >
                  Login
                </Link>
                <Link
                  to={ROUTES.REGISTER}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
