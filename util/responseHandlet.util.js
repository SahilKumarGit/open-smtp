export const SuccessResponse = (res, data, message = undefined) => {
  res.status(200).send({ data, message, success: true });
};

export const FailedResponse = (res, code, data, message = undefined) => {
  res.status(code).send({ data, message, success: false });
};
