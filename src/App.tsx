import React, { Suspense } from "react";
import AppRoutes from "./routes/Routes";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
              </div>
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
