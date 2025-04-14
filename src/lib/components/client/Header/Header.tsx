"use client";

import { HeaderProps } from "./Header.type";

const Header = ({ title, leftButton, rightButton }: HeaderProps) => {
  return (
    <header className="w-full flex items-center justify-between px-[1.6rem] py-[4.8rem] relative">
      {/* 왼쪽 버튼 */}
      {leftButton && (
        <div className="absolute left-[1.6rem]">
            <button onClick={leftButton.onClick} className="px-[0.8rem]">
              {leftButton.icon}
            </button>
        </div>
      )}

      {/* 제목 */}
      <h1 className="mx-auto text-[2.4rem] font-medium text-center">
        {title}
      </h1>

      {/* 오른쪽 버튼 */}
      {rightButton && (
        <div className="absolute right-[1.6rem]">
            <button onClick={rightButton.onClick} className="px-[0.8rem]">
              {rightButton.icon}
            </button>
        </div>
      )}
    </header>
  )
}

export default Header;
