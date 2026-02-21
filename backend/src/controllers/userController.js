import { User } from "../models/User.js";

export const syncUser = async (req, res) => {
  try {
    const { userId, sessionClaims } = req.auth;

    const email = sessionClaims?.email;
    const firstName = sessionClaims?.first_name;
    const lastName = sessionClaims?.last_name;

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({
        clerkId: userId,
        email,
        firstName,
        lastName,
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "User sync failed" });
  }
};