import fetch from "node-fetch";
import express from "express";
import APIRouter from "./routes/api.js";

const port = 8080;

const app = express();
app.use("/api", APIRouter);

const hatchwaysPostsAPI =
  "https://api.hatchways.io/assessment/blog/posts?tag=tech";

const getPostData = async () => {
  try {
    const getData = fetch(hatchwaysPostsAPI, {
      method: "get",
      mode: "cors",
    });

    const data = await getData;

    // data.json().then((item) => {
    //   // console.log("the data");
    //   // console.log(item);
    // });

    console.log("finsied getting data");
  } catch (error) {
    console.log("ERROR:", error);
  }
};

// getPostData();

app.get("/", (req, res) => {
  res.json([
    { name: "Victor", lastname: "Pineda", age: 27 },
    { name: "Victor", lastname: "Pineda", age: 27 },
    { name: "Victor", lastname: "Pineda", age: 27 },
  ]);
});

app.listen(port, () => {
  console.log("Server ready on port:", port);
});
