import { Router } from "express";
import { FailedResponse } from "../util/responseHandlet.util.js";
import { SendEmails } from "../components/emailSender.v1.js";

const router = Router();

router.post("/send", SendEmails);

router.all("/*", (req, res) => FailedResponse(res, 404, {}, "Invalid API end point."));

export const v1Router = router;
