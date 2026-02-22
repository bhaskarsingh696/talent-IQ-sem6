import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectRole from "./pages/SelectRole";
import StudentDashboard from "./pages/StudentDashboard";
import InterviewerDashboard from "./pages/InterviewerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Clerk Routes */}
        <Route
          path="/login/*"
          element={<SignIn routing="path" path="/login" />}
        />
        <Route
          path="/register/*"
          element={<SignUp routing="path" path="/register" />}
        />

        {/* Role + Dashboards */}
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/interviewer" element={<InterviewerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;