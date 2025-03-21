import { Menubar } from "@lib/containers/server";

import { Meta, StoryObj } from "@storybook/react";

/**
 * ## Menubar Ui Component
 *
 * 책풀 서비스 내부 하단에 위치한 Menubar Component입니다.<br>
 *
 * ### use
 *
 * (with_Menubar) layout.tsx에서 사용되어집니다.<br>
 * Menubar가 필요한 Route Page의 경우 해당 layout을 사용하여 Menubar를 렌더링합니다.<br>
 *
 * */
const meta = {
  title: "Containers/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},

  args: {},
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    Menubar => {
      return (
        <div className="w-[40rem] min-w-[40rem] h-[8rem] flex shadow-lg">
          <Menubar />
        </div>
      );
    },
  ],
};
