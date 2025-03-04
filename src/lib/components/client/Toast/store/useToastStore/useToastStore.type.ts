import { CreateToastFunc, ToastListItemType } from "../../Toast.type";

export interface UseToastStore {
  toastList: ToastListItemType[];

  removeToast: (toastId: string) => void;
  createToast: CreateToastFunc;
}
