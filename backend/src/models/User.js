import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    imageUrl: String,
    role: {
  type: String,
  enum: ["interviewer", "candidate"],
  default: null,
   },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;