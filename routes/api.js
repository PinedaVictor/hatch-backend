import Router from "express";
import { getPostsData } from "../data/blogs.js";
import { success, paramError } from "../utils/index.js";

const APIRouter = Router();

APIRouter.get("/ping", (req, res) => {
  success(res);
});

APIRouter.get("/posts", async (req, res) => {
  const requestParameters = req.query;
  if (!requestParameters["tags"]) {
    paramError(res, "tags", "required");
    return;
  }
  if (
    requestParameters["sortBy"] &&
    !requestParameters["sortBy"].match(/^(id|reads|likes|popularity)$/)
  ) {
    paramError(res, "sortBy", "invalid");
    return;
  }
  if (
    requestParameters["direction"] &&
    !requestParameters["direction"].match(/^(desc|asc)$/)
  ) {
    paramError(res, "direction", "invalid");
    return;
  }
  const posts = await getPostsData(requestParameters);

  if (posts) {
    console.log("the posts", posts);
    res.json({ posts });
    res.status(200);
  } else {
    res.json({ error: "Unable to fetch data" });
    res.status(400);
  }
});

export default APIRouter;
