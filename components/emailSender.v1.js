import { FailedResponse, SuccessResponse } from "../util/responseHandlet.util.js";
import { SendMail } from "../util/smtp.util.js";
import { emptyArray, emptyObject, emptyString } from "../util/validations.util.js";

export async function SendEmails(req, res) {
  try {
    const { config, payload } = req.body;
    if (!config || emptyObject(config)) return FailedResponse(res, 400, {}, `Config values are required.`);
    if (!payload || emptyObject(payload)) return FailedResponse(res, 400, {}, `Payload values are required.`);

    if (!config.service || emptyString(config.service)) return FailedResponse(res, 400, {}, `In config, service is required.`);
    if (!config.user || emptyString(config.user)) return FailedResponse(res, 400, {}, `In config, user is required.`);
    if (!config.pass || emptyString(config.pass)) return FailedResponse(res, 400, {}, `In config, pass is required.`);

    if (!payload.title || emptyString(payload.title)) return FailedResponse(res, 400, {}, `In payload, title is required.`);
    if (!payload.subject || emptyString(payload.subject)) return FailedResponse(res, 400, {}, `In payload, subject is required.`);
    if (!payload.to || emptyArray(payload.to)) return FailedResponse(res, 400, {}, `In payload, to is required as array of strings.`);
    if (!payload.body || emptyString(payload.body)) return FailedResponse(res, 400, {}, `In payload, body is required.`);

    await SendMail(config, payload);
    return SuccessResponse(res, {}, "Email send successful.");
  } catch (error) {
    return FailedResponse(res, 500, {}, error.message);
  }
}
