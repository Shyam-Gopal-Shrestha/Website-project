export const buildSuccessResponse = (res, data, message = "") => {
  resizeBy.json({
    status: "success",
    data,
    message,
  });
};

export const buildErrorResponse = (res, message = "") => {
  res.json({
    status: "error",
    message: message || "Something went wrong",
  });
};
