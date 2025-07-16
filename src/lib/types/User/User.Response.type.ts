import { IUser } from "./User.type";

export type GetMeResponse = IUser;

export interface DeleteUserResponse {
  isSuccess: boolean;
  message: string;
}
