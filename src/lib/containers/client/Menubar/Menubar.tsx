"use client";

import Link from "next/link";

import React from "react";

import tailwindConfig from "../../../../../tailwind.config";
import { MENU_LIST } from "./constants";
import { useActiveMenu } from "./hooks";

import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";

const Menubar = () => {
  const { isActiveMenu } = useActiveMenu();

  const { theme } = resolveConfig(tailwindConfig);
  const { colors } = theme;

  return (
    <nav className="w-full h-[8rem] flex border-t-[0.1rem] border-main">
      {MENU_LIST.map(({ title, href, MenuIcon }) => {
        const isActive = isActiveMenu(href);

        return (
          <li
            key={title}
            className="grow-[1] flex items-center justify-center"
          >
            <Link
              href={href}
              className={twMerge(
                "flex flex-col items-center text-[1.2rem] text-gray_400 transition-all",
                isActive && "text-main",
              )}
            >
              <MenuIcon
                className=" opacity-[0.7]"
                fill={isActive ? colors.main : colors.gray_400}
              />
              {title}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Menubar;
