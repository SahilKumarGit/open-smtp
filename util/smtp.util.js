import nodemailer from "nodemailer";

/**
 * @param {* } config
 * @param {*} payload
 * @returns
 */
export const SendMail = async (config, payload) => {
  try {
    console.log("SendEmail", "Running...");
    let transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    let details = {
      from: `"${payload.title || payload.subject}" <${config.user}>`,
      to: payload.to.join(", "),
      subject: payload.subject,
      html: payload.body,
    };

    // send mail with defined details object
    const resp = await transporter
      .sendMail(details)
      .then(() => {
        console.log("SendEmail", "Messages sending successfully");
        return { error: false, errorMessage: {} };
      })
      .catch((e) => {
        console.error("SendEmail", "Messages sending failed", e);
        return { error: true, errorMessage: e };
      });
    console.log("SendEmail", "Done!");
    return resp;
  } catch (_) {
    console.error("SendEmail", "CATCH ERROR", "Messages sending failed", _);
    return { error: true, errorMessage: _ };
  }
};
