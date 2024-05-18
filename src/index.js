import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (req, resp) => {
  resp.send("Hello World");
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
