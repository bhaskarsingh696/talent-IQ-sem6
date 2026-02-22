import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const navigate = useNavigate();

  const chooseRole = async (role) => {
    console.log("Role clicked:", role); // DEBUG LINE

    try {
      const res = await axios.put("/api/users/role", { role });

      console.log("Response:", res.data);

      if (role === "interviewer") {
        navigate("/dashboard/interviewer");
      } else {
        navigate("/dashboard/student");
      }
    } catch (err) {
      console.error("Error updating role:", err);
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">Choose Your Role</h2>

        <div className="button-group">
          <button
            className="btn primary"
            onClick={() => chooseRole("student")}
          >
            I am a Student
          </button>

          <button
            className="btn secondary"
            onClick={() => chooseRole("interviewer")}
          >
            I am an Interviewer
          </button>
        </div>
      </div>
    </div>
  );
}