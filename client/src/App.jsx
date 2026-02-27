import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Leaderboard from "./pages/Leaderboard";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Guidelines from "./pages/Guidelines";
import Modules from "./pages/Modules";
import MockDrill from "./pages/MockDrill";
import Quiz from "./pages/Quiz";
import MapPage from "./pages/Map";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Route */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/guidelines" element={<ProtectedRoute><Guidelines /></ProtectedRoute>} />
        <Route path="/modules" element={<ProtectedRoute><Modules /></ProtectedRoute>} />
        <Route path="/mockdrill" element={<ProtectedRoute><MockDrill /></ProtectedRoute>} />
        <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/map" element={<ProtectedRoute><MapPage /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;
