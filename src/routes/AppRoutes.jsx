import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import RoutePlanner from "../pages/RoutePlanner";
import RouteResult from "../pages/RouteResult";
import SavedRoutes from "../pages/SavedRoutes";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
function AppRoutes() {
    return (
       
            <Routes>

    {/* Public Routes */}

    <Route path="/" element={<LandingPage />} />

    <Route path="/login" element={<LoginPage />} />

    <Route path="/register" element={<RegisterPage />} />

    {/* Protected Routes */}

    <Route
        path="/dashboard"
        element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }
    />

    <Route
        path="/planner"
        element={
            <ProtectedRoute>
                <RoutePlanner />
            </ProtectedRoute>
        }
    />

    <Route
        path="/result"
        element={
            <ProtectedRoute>
                <RouteResult />
            </ProtectedRoute>
        }
    />

    <Route
        path="/saved"
        element={
            <ProtectedRoute>
                <SavedRoutes />
            </ProtectedRoute>
        }
    />

    <Route
        path="/profile"
        element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        }
    />

</Routes>
      
    );
}

export default AppRoutes;