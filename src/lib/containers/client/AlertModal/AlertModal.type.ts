import { ModalProps } from "@lib/components/client/Modal/Modal.type";

export interface AlertModalProps
  extends Omit<ModalProps, "children" | "hideCloseIcon"> {
  message: string;
  buttonText?: string;
}
