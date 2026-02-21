import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://talent-iq-sem6.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/users", userRoutes);

app.get("/health", (req, res) => {
  res.json({ msg: "API running" });
});

app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  const PORT = ENV.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

startServer();