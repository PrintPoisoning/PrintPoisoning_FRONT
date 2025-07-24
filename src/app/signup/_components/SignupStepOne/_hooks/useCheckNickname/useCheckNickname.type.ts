import { UseFormClearErrors, UseFormGetValues, UseFormSetValue } from "react-hook-form";

import { SignupFormValues } from "@app/signup/signup.type";

export interface UseCheckNicknameProps {
  getValues: UseFormGetValues<SignupFormValues>;
  setValue: UseFormSetValue<SignupFormValues>;
  clearErrors: UseFormClearErrors<SignupFormValues>;
}
