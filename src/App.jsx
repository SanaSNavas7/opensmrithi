import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/student/StudentDashboard";
import NotFound from "./pages/NotFound";
import InstitutionDashboard from "./pages/institution/InstitutionDashboard";
import EducationalRecords from "./pages/institution/EducationalRecords";
import InstitutionSupport from "./pages/institution/InstitutionSupport";
import InstitutionAnalytics from "./pages/institution/InstitutionAnalytics";
import Landing from "./Landing";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Dashboard */}
        <Route
          path="/student-dashboard"
          element={user?.role === "student" ? <StudentDashboard /> : <Navigate to="/login" />}
        />

        {/* Institution Dashboard */}
        <Route
          path="/institution-dashboard"
          element={<InstitutionDashboard /> }
        >
          <Route path="records" element={<EducationalRecords />} />
          <Route path="analytics" element={<InstitutionAnalytics />} />
          <Route path="support" element={<InstitutionSupport />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
