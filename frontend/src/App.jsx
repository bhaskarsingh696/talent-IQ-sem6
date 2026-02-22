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
    <div style={{ padding: "40px" }}>
      <SignedOut>
        <h2>Please Sign In</h2>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <h2>Welcome to Talent IQ 🚀</h2>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default App;