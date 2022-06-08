import { Response } from "node-fetch";

const paramError = (
  res = new Response(),
  param = "",
  cause = "required" | "invalid"
) => {
  res.json({ error: `${param} parameter is ${cause}.` });
  res.status(400);
};

const success = (res = new Response()) => {
  res.json({ success: true });
  res.status(200);
};

export { success, paramError };
