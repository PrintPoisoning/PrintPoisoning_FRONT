"use client";

import { useEffect, useMemo } from "react";

import { BookFullErrorResponse } from "@lib/types";
import { makeBookFullError } from "@lib/utils";

import useToast from "../useToast/useToast";
import { UseBookFullErrorParams } from "./useBookFullError.type";

const useBookFullError = ({ error }: UseBookFullErrorParams) => {
  const { createToast } = useToast();

  const errorData: BookFullErrorResponse = useMemo(() => {
    const parsingError: BookFullErrorResponse = JSON.parse(error.message);

    if (!parsingError.errorCode || !error.message) {
      return makeBookFullError();
    }

    console.error(`책풀에 문제가 발생했어요! 관리자에게 문의해주세요. (문의 코드 : ${parsingError.errorCode})`);

    return parsingError;
  }, [error]);

  useEffect(() => {
    createToast(errorData.message);
  }, [createToast, errorData.message]);

  return errorData;
};

export default useBookFullError;
