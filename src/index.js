import express from "express";
import "dotenv/config";
import dbConnect from "./db/index.js";

const app = express();

dbConnect();

app.get("/", (req, resp) => {
  resp.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
