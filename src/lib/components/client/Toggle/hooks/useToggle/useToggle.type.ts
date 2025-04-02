import React from "react";

export interface UseToggleProps {
  initialState?: boolean;
}

export interface UseToggleReturn {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setChecked: (value: boolean) => void;
}
