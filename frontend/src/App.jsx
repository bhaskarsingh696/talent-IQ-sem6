import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
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
    <>
      <h1>Welcome to the app 🙏</h1>
    </>
  );
}

export default App;