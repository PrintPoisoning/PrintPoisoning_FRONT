import {
  CloseIcon,
  MenuBookIcon,
  MenuCloverIcon,
  MenuTalkIcon,
  MenuUserIcon,
} from "@lib/components/server";

import type { Meta, StoryObj } from "@storybook/react";

import { IconStoryBox } from "./components";

/**
 * **공통 Icon 컴포넌트 모음**
 *
 * 현재 Blog 에서 사용되어지는 Icon들을 한눈에 확인할 수 있습니다.
 *
 * ```tsx
 * import { SVGProps } from "react";
 *
 * export interface IconGlobalProps extends SVGProps<SVGSVGElement> {
 *   size?: string;
 *   fill?: string;
 * }
 * ```
 * - 모든 Icon은 SVG 형태로 구현 되어있습니다.
 *
 *
 * ### Size 조절 불가 Icon
 * - MenuCloverIcon
 * - MenuBookIcon
 * - MenuTalkIcon
 * - MenuUserIcon
 * */
const meta = {
  title: "Icons/공통 아이콘 목록",
  component: IconStoryBox,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    children: {
      control: { disable: true },
      description: "Icon을 보여주기 위한 layout 용도 ( 실제 Component와 무관 )",
    },
  },
} satisfies Meta<typeof IconStoryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    children: <CloseIcon />,
  },
};

export const MenuClover: Story = {
  args: {
    children: <MenuCloverIcon />,
  },
};

export const MenuBook: Story = {
  args: {
    children: <MenuBookIcon />,
  },
};

export const MenuTalk: Story = {
  args: {
    children: <MenuTalkIcon />,
  },
};

export const MenuUser: Story = {
  args: {
    children: <MenuUserIcon />,
  },
};
