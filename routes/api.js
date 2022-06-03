import Router from "express";
const APIRouter = Router();

APIRouter.get("/ping", (req, res) => {
  res.json({ success: true });
});
APIRouter.get("/posts", (req, res) => {
  res.json({ postData: "YASS" });
});

export default APIRouter;
