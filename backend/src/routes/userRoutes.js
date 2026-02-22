import express from "express";
import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

const router = express.Router();

router.get("/me", requireAuth(), async (req, res) => {
  try {
    const user = await User.findOne({
      clerkId: req.auth.userId,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/role", requireAuth(), async (req, res) => {
  try {
    const { role } = req.body;

    const user = await User.findOneAndUpdate(
      { clerkId: req.auth.userId },
      { role },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;