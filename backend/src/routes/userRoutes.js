import express from "express";
const router = express.Router();

router.post("/sync", async (req, res) => {
  res.json({ message: "Sync works" });
});

export default router;