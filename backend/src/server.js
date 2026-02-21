import express from "express";
import {ENV} from "./lib/env.js";

const app = express()

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get("/health",(req,res) => {
  res.status(200).json({msg:"success api is up and running "})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log("Server is running on port:", PORT)
);