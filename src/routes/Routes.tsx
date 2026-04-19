import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../modules/auth/AuthContext";
import { ROUTES } from "../constants/routes";

const Home = lazy(() => import("../pages/Home"));
const DashboardOverview = lazy(
  () => import("../pages/dashboard/DashboardOverview"),
);
const DashboardVideos = lazy(
  () => import("../pages/dashboard/DashboardVideos"),
);
const DashboardAnalytics = lazy(
  () => import("../pages/dashboard/DashboardAnalytics"),
);
const Login = lazy(() => import("../modules/auth/pages/Login"));
const Register = lazy(() => import("../modules/auth/pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const UploadVideo = lazy(() => import("../modules/video/pages/UploadVideo"));

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, isLoading } = useAuth();
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  if (!user) return <Navigate to={ROUTES.LOGIN} replace />;
  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.UPLOAD_VIDEO} element={<UploadVideo />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <DashboardOverview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/videos"
        element={
          <ProtectedRoute>
            <DashboardVideos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/analytics"
        element={
          <ProtectedRoute>
            <DashboardAnalytics />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
