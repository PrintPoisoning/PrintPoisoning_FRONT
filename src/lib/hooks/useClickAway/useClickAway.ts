import { useEffect, useRef } from "react";

import { UseClickAwayCallback } from "./useClickAway.type";

const useClickAway = <T>(callback: UseClickAwayCallback) => {
  const ref = useRef<T | null>(null);
  const callbackSave = useRef(callback);

  useEffect(() => {
    const element = ref.current;

    if (!element || !(element instanceof HTMLElement)) return;

    const handleEvent = (e: MouseEvent | TouchEvent) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLElement)) return;

      if (element.contains(target)) return;

      callbackSave.current(e);
    };

    window.addEventListener("mousedown", handleEvent);
    window.addEventListener("touchstart", handleEvent);

    return () => {
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("touchstart", handleEvent);
    };
  }, [ref.current]);

  return ref;
};

export default useClickAway;
