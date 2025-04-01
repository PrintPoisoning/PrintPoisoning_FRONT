"use client";

import { useCallback, useState } from "react";

import { UseToggleProps, UseToggleReturn } from "./useToggle.type";

const useToggle = ({
  initialState = false,
}: UseToggleProps): UseToggleReturn => {
  const [checked, setChecked] = useState(initialState);

  const handleToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }, []);

  return {
    checked,
    onChange: handleToggle,
    setChecked,
  };
};

export default useToggle;
