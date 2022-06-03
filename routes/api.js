import Router from "express";
const APIRouter = Router();

APIRouter.get("/ping", (req, res) => {
  res.json({ success: true });
  res.status(200);
  return;
});

APIRouter.get("/posts", (req, res) => {
  const requestParameters = req.query;

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

  console.log(requestParameters);
  //   parameter defualts: sortBy: id, direction: asc

  res.send("SUP");

  //   We must now check for valid sortBy and direction parameters
});

export default APIRouter;
