import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

export default function Home() {
  const { isSignedIn, getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = async () => {
      if (isSignedIn) {
        try {
          const token = await getToken();

          const res = await axios.get("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!res.data.role) {
            navigate("/select-role");
          } else if (res.data.role === "interviewer") {
            navigate("/dashboard/interviewer");
          } else {
            navigate("/dashboard/student");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    checkUserRole();
  }, [isSignedIn, getToken, navigate]);

  const handleGetStarted = () => {
    if (!isSignedIn) {
      navigate("/login");
    } else {
      navigate("/select-role");
    }
  };

  return (
    <div className="page-container">
      <div className="hero">
        <h1 className="hero-title">
          Realistic Mock Coding Interviews.
        </h1>

        <p className="hero-subtitle">
          Create live interview sessions or practice real coding rounds.
        </p>

        <div className="hero-buttons">
          <button className="btn primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}