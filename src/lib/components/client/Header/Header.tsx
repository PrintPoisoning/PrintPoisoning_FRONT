"use client";

import { HeaderProps } from "./Header.type";

const Header = ({ title, leftButton, rightButton }: HeaderProps) => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-12 relative">
      {/* 왼쪽 버튼 */}
      <div className="absolute left-4">
        {leftButton && (
          <button onClick={leftButton.onClick} className="p-2">
            {leftButton.icon}
          </button>
        )}
      </div>

      {/* 제목 */}
      <h1 className="mx-auto text-size24 font-medium text-center">
        {title}
      </h1>

      {/* 오른쪽 버튼 */}
      <div className="absolute right-4">
        {rightButton && (
          <button onClick={rightButton.onClick} className="p-2">
            {rightButton.icon}
          </button>
        )}
      </div>
    </header>
  )
}

export default Header;