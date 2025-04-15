import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async () => {
  throw createError({
    statusCode: 500,
    statusMessage: "Internal Server Error",
    message: "This is a test 500 error response",
  });
});
