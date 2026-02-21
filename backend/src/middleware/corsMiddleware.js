import cors from "cors";

export const corsMiddleware = cors({
  origin: [
    "http://localhost:5173",
    "https://talent-iq-sem6.vercel.app",
  ],
  credentials: true,
});