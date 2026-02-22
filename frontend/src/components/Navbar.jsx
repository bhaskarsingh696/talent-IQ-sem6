import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Navbar() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setRole(res.data.role);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const goToDashboard = () => {
    if (role === "interviewer") {
      navigate("/dashboard/interviewer");
    } else if (role === "candidate") {
      navigate("/dashboard/candidate");
    } else {
      navigate("/select-role");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Talent IQ
      </Link>

      <SignedIn>
        <button
          className="nav-dashboard-btn"
          onClick={goToDashboard}
        >
          Dashboard
        </button>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <span className="nav-text">Welcome</span>
      </SignedOut>
    </nav>
  );
}