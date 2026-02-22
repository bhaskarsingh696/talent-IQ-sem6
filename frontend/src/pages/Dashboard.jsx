import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
   <SignedIn>
  <p style={{ marginBottom: "20px" }}>
    Welcome back 👋
  </p>

  <button className="btn primary">
    Go to Dashboard
  </button>

  <div style={{ marginTop: "15px" }}>
    <UserButton />
  </div>
</SignedIn>
  );
}