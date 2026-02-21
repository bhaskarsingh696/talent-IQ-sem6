import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

const startServer = async () => {
  try {
    await connectDB();
    const PORT = ENV.PORT || 3000;

    app.listen(PORT, () => {
      console.log("🚀 Server running on port:", PORT);
    });
  } catch (error) {
    console.error("Server start failed:", error);
  }
};

startServer();