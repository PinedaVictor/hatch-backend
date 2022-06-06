import Router from "express";
import { getPostsData } from "../data/blogs.js";
const APIRouter = Router();

APIRouter.get("/ping", (req, res) => {
  res.json({ success: true });
  res.status(200);
  return;
});

APIRouter.get("/posts", async (req, res) => {
  const requestParameters = req.query;

  // TODO: Create validate params function
  // TODO: Create error response function
  // TODO: Create success response function
  //   checking for valid query paremeters
  if (!requestParameters["tags"]) {
    res.json({ error: "tags parameter is required" });
    res.status(400);
    return;
  }

  if (
    requestParameters["sortBy"] &&
    !requestParameters["sortBy"].match(/^(id|reads|likes|popularity)$/)
  ) {
    res.json({ error: "sortBy parameter is required" });
    res.status(400);
    return;
  }

  if (
    requestParameters["direction"] &&
    !requestParameters["direction"].match(/^(desc|asc)$/)
  ) {
    res.json({ error: "direction parameter is required" });
    res.status(400);
    return;
  }

  //   console.log(requestParameters);
  //   get json data
  const data = await getPostsData(requestParameters);

  res.send("SUP");

  // TODO:
  //   return json data as response
  // res.json(data);
});

export default APIRouter;
