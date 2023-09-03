import express from "express";
import { v1Router } from "./routers/routes.v1.js";
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use("/v1", v1Router);

app.all("/*", (req, res) => FailedResponse(res, 404, {}, "Invalid API end point."));

app.listen(PORT, (error) => {
  if (error) {
    return console.error("Server running error:", error);
  }
  return console.log("Server running Successfully:", PORT);
});
