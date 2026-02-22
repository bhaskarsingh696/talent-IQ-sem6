import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Talent IQ</Link>

      <SignedIn>
        <Link to="/dashboard">Dashboard</Link>
      </SignedIn>

      <SignedOut>
        <span className="nav-text">Welcome</span>
      </SignedOut>
    </nav>
  );
}