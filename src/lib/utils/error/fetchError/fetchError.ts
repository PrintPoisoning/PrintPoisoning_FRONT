import makeBookFullError from "../makeBookFullError/makeBookFullError";
import { FetchErrorParams } from "./fetchError.type";

const fetchError = ({ timestamp, error, errorCode }: FetchErrorParams) => {
  // Default REST Api Error Type
  if (error && timestamp) {
    return JSON.stringify(
      makeBookFullError({
        errorCode,
        timestamp,
      }),
    );
  }

  // BookFull Error Type
  return JSON.stringify(makeBookFullError({ errorCode }));
};

export default fetchError;
