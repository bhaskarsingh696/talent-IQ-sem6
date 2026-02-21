import { useEffect } from "react";
import axiosInstance from "./utils/axios";

function App() {
  useEffect(() => {
    const testBackend = async () => {
      try {
        const res = await axiosInstance.get("/health");
        console.log("Backend Response:", res.data);
      } catch (error) {
        console.error("Error connecting to backend:", error);
      }
    };

    testBackend();
  }, []);

  return <h1>Talent IQ Frontend Connected</h1>;
}

export default App;