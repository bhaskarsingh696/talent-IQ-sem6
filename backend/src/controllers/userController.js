import User from "../models/User.js";
import { clerkClient } from "@clerk/express";

export const syncUser = async (req, res, next) => {
  try {
    const { userId } = req.auth;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Fetch full user data from Clerk
    const clerkUser = await clerkClient.users.getUser(userId);

    const email = clerkUser.emailAddresses[0]?.emailAddress;

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({
        clerkId: userId,
        email,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
      });
    } else {
      user.firstName = clerkUser.firstName;
      user.lastName = clerkUser.lastName;
      user.imageUrl = clerkUser.imageUrl;
      await user.save();
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};