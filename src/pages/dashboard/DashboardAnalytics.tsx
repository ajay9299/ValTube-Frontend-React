import React from "react";
import DashboardLayout from "./DashboardLayout";

export default function DashboardAnalytics() {
  return (
    <DashboardLayout activeTab="analytics">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-6">Analytics</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-600 text-sm mb-2 font-semibold uppercase tracking-wide">
              Views This Month
            </p>
            <p className="text-4xl font-bold text-blue-600">543</p>
            <p className="text-green-600 text-sm mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h.01a1 1 0 110 2H12zm-3 1a1 1 0 100-2 1 1 0 000 2zm2.646-2.354a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707L9 7.707l1.646 1.647a.5.5 0 00.707-.707l-2-2z"
                  clipRule="evenodd"
                />
              </svg>
              +12% from last month
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <p className="text-gray-600 text-sm mb-2 font-semibold uppercase tracking-wide">
              New Subscribers
            </p>
            <p className="text-4xl font-bold text-green-600">28</p>
            <p className="text-green-600 text-sm mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h.01a1 1 0 110 2H12zm-3 1a1 1 0 100-2 1 1 0 000 2zm2.646-2.354a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707L9 7.707l1.646 1.647a.5.5 0 00.707-.707l-2-2z"
                  clipRule="evenodd"
                />
              </svg>
              +5% from last month
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Top Videos</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Video 1</span>
                <span className="text-blue-600 font-semibold">234 views</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Video 2</span>
                <span className="text-blue-600 font-semibold">187 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Video 3</span>
                <span className="text-blue-600 font-semibold">122 views</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">
              Engagement Rate
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Likes</span>
                  <span className="text-gray-900 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Comments</span>
                  <span className="text-gray-900 font-semibold">62%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "62%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Shares</span>
                  <span className="text-gray-900 font-semibold">48%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "48%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
