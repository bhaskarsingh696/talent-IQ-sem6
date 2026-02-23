import express from "express";
import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

const router = express.Router();

router.post("/sync", requireAuth(), async (req, res) => {
  try {
    const { userId, sessionClaims } = req.auth;

    const email = sessionClaims?.email;
    const firstName = sessionClaims?.first_name;
    const lastName = sessionClaims?.last_name;
    const imageUrl = sessionClaims?.image_url;

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({
        clerkId: userId,
        email,
        firstName,
        lastName,
        imageUrl,
        role: null,
      });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User sync failed" });
  }
});

export default router;