export type ToastType = "alert" | "warning" | "danger" | "safe";

export interface CreateToastOptionsType {
  deleteTime?: number;
  type?: ToastType;
}

export type CreateToastFunc = (
  message: string,
  options?: CreateToastOptionsType,
) => void;

export interface ToastListItemType {
  message: string;
  id: string;
  deleteTime: number;
  type: ToastType;
}
