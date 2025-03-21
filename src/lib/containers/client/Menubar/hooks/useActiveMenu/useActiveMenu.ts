"use client";

import { usePathname } from "next/navigation";

import { useCallback } from "react";

const useIsActiveMenu = () => {
  const pathName = usePathname();

  const isActiveMenu = useCallback(
    (href: string) => pathName.includes(href),
    [pathName],
  );

  return { isActiveMenu };
};

export default useIsActiveMenu;
