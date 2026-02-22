import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import axios from "axios";

function App() {
  const { isSignedIn, getToken } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      try {
        if (isSignedIn) {
          const token = await getToken();

          const res = await axios.post(
            "https://talent-iq-api.onrender.com/api/users/sync",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("User synced:", res.data);
        }
      } catch (error) {
        console.error("Sync failed:", error.response?.data || error.message);
      }
    };

    syncUser();
  }, [isSignedIn, getToken]);

   return (
  <div className="app-container">
    <div className="card">
      <h1 className="title">Talent IQ 🚀</h1>

      <SignedOut>
        <p className="subtitle">
          Sharpen your coding skills and track your progress.
        </p>

        <div className="button-group">
          <SignInButton mode="modal">
            <button className="btn primary">Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="btn secondary">Register</button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <p className="subtitle">Welcome back 👋</p>

        <div className="user-section">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  </div>
);
}

export default App;