import React from "react";
import { useAuth } from "../../modules/auth/AuthContext";
import DashboardLayout from "./DashboardLayout";

export default function DashboardOverview() {
  const { user } = useAuth();

  return (
    <DashboardLayout activeTab="overview">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Account Overview
        </h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Name:</strong> {user?.firstName || "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "Not provided"}
          </p>
          <p>
            <strong>User ID:</strong> {user?.userId || "Not available"}
          </p>
          <p>
            <strong>Account Status:</strong>{" "}
            <span className="text-green-600 font-semibold">Active</span>
          </p>
          <p>
            <strong>Member Since:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
