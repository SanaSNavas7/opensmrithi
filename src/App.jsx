import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import StudentDashboard from "./pages/student/StudentDashboard";
import InstitutionDashboardLayout from "./pages/institution/InstitutionDashboardLayout";
import InstitutionHome from "./pages/institution/InstitutionHome";
import InstitutionAnalytics from "./pages/institution/InstitutionAnalytics";
import InstitutionUsers from "./pages/institution/InstitutionUsers";
import EducationalRecords from "./pages/institution/EducationalRecords";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/student-dashboard"
        element={
          user?.role === "student" ? <StudentDashboard /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/institution-dashboard/*"
        element={
          user?.role === "institution" ? <InstitutionDashboardLayout /> : <Navigate to="/login" />
        }
      >
        <Route index element={<InstitutionHome />} />
        <Route path="analytics" element={<InstitutionAnalytics />} />
        <Route path="users" element={<InstitutionUsers />} />
        <Route path="records" element={<EducationalRecords />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
