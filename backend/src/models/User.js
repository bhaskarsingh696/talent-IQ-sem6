import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    firstName: String,
    lastName: String,
    role: {
      type: String,
      enum: ["interviewer", "candidate"],
      default: "candidate",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);