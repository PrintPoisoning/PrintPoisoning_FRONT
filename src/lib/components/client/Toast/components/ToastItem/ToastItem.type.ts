import { ToastType } from "../../Toast.type";

export interface ToastItemProps {
  message: string;
  deleteTime: number;
  type: ToastType;
  onClose: () => void;
}
