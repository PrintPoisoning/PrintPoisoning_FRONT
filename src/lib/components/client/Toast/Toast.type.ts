export interface CreateToastOptionsType {
  deleteTime?: number;
}

export type CreateToastFunc = (
  message: string,
  options?: CreateToastOptionsType,
) => void;

export interface ToastListItemType {
  message: string;
  id: string;
  deleteTime: number;
}
