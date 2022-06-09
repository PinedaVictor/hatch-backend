import express from "express";
import APIRouter from "./routes/api.js";

const port = 8080;

const app = express();
app.use("/api", APIRouter);

app.get("/", (req, res) => {
  res.json([{ name: "Victor", lastname: "Pineda" }]);
  res.status(200);
});

app.listen(port, () => {
  console.log("Server ready on port:", port);
});
