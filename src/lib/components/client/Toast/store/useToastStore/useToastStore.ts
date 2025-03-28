import { UseToastStore } from "./useToastStore.type";

import { v4 as uuidV4 } from "uuid";
import { create } from "zustand";

const useToastStore = create<UseToastStore>(set => ({
  toastList: [],

  removeToast: toastId =>
    set(({ toastList }) => ({
      toastList: toastList.filter(({ id }) => id !== toastId),
    })),

  createToast: (message, options = {}) => {
    const { deleteTime = 3000, type = "alert" } = options;
    const id = uuidV4();

    set(({ toastList, removeToast }) => {
      setTimeout(() => {
        removeToast(id);
      }, deleteTime + 250);

      return { toastList: [...toastList, { id, message, deleteTime, type }] };
    });
  },
}));

export default useToastStore;
