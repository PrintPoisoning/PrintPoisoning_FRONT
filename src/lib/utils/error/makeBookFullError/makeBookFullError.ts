import ERROR_MESSAGE from "@lib/constants/ERROR_CODE/ERROR_CODE";
import { BookFullErrorResponse } from "@lib/types";

import { MakeBookFullErrorParams } from "./makeBookFullError.type";

const makeBookFullError = ({ timestamp, errorCode }: MakeBookFullErrorParams = {}) => {
  const newError: BookFullErrorResponse = {
    timestamp: timestamp ?? new Date().toISOString(),
    errorCode: errorCode ?? "Unknown Error",
    message: ERROR_MESSAGE(errorCode ?? "Unknown Error"),
  };

  return newError;
};

export default makeBookFullError;
