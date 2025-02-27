import { Modal } from "@lib/components/client";
import { useModal } from "@lib/hooks";

import { Meta, StoryObj } from "@storybook/react";

/**
 * ## Modal Ui Component
 *
 * Modal UI를 편하게 사용할 수 있도록 구현한 Modal Component입니다.<br>
 * 기본적으로 `AwayClick`, `Escape key`를 이용한 Modal 닫기 기능을 제공합니다.<br>
 * ( 해당 기능은 Option을 통해 off 할 수 있습니다. )
 *
 * ### use
 *
 * Modal은 `useModal hook`과 함께 사용하여 useModal 내부의 값을 Modal에 전달하여 사용할 수 있습니다.<br>
 *
 * - **isShow Props**에 useModal hook 내부 isShow를 전달합니다.
 * - **onClose Props**에 useModal hook 내부 openModal을 전달합니다.
 *
 * <br>
 *
 * `openModal`를 호출하여 Modal을 나타낼 수 있습니다.
 *
 * <br>
 *
 * ```tsx
 * import { Modal } from "@lib/components/client";
 * import { useModal } from "@lib/hooks";
 *
 * const [
 *   isShow, // Modal Component의 isShow Prop에 전달합니다.
 *   openModal, // Modal을 활성화시킬 때 호출합니다.
 *   closeModal // Modal Component의 onClose Prop에 전달합니다.
 * ] = useModal();
 *
 * return (
 *   <Modal
 *     isShow={isShow}
 *     onClose={closeModal}
 *
 *     // Optional
 *     hideCloseIcon={false}
 *     disableAwayClick={false}
 *  >
 *
 *  { children }
 *
 *   </Modal>
 * )
 * ```
 *
 * ### Props
 *
 * - **isShow**<br>
 *   useModal의 `isShow` 값을 전달받습니다.
 *
 * - **onClose**<br>
 *   useModal의 `handleCloseModal` 메서드를 전달받습니다.
 *
 * - **hideCloseIcon ( optional )**<br>
 *   true 전달 시 기본 스타일 `Close Icon`을 비활성화합니다.
 *
 * - **disableAwayClick ( optional )**<br>
 *   true 전달 시 `Away Click`을 통한 Modal close 기능을 비활성화합니다.
 *
 * ### type
 *
 * - **isShow** : `boolean`
 * - **onClose** : `() => void`
 *
 * <br>
 *
 * - **hideCloseIcon ( optional )** : `boolean`
 * - **disableAwayClick ( optional )** : `boolean`
 * */
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    isShow: {
      control: { disable: true },
      description: "useModal의 `isShow` 값을 전달받습니다.",
    },

    onClose: {
      control: { disable: true },
      description: "useModal의 `handleCloseModal` 메서드를 전달받습니다.",
    },

    children: {
      control: { disable: true },
      description: "Modal 내부에 나타낼 요소를 전달받습니다.",
    },

    hideCloseIcon: {
      control: "boolean",
      description: "true 전달 시 기본 스타일 `Close Icon`을 비활성화합니다.",
    },

    disableAwayClick: {
      control: "boolean",
      description:
        "true 전달 시 `Away Click`을 통한 Modal close 기능을 비활성화합니다.",
    },
  },

  args: {
    isShow: false,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-[28rem] h-[32rem] flex items-center justify-center text-size16 font-semibold">
        Modal
      </div>
    ),
  },
  decorators: [
    (ModalComponent, { args }) => {
      const [isShow, openModal, closeModal] = useModal();

      return (
        <>
          <button
            className="w-[16rem] h-[5rem] bg-gray-500 rounded-radius8 text-size16 font-semibold text-white cursor-pointer"
            onClick={openModal}
          >
            Modal Open!!
          </button>
          <ModalComponent args={{ ...args, isShow, onClose: closeModal }} />
        </>
      );
    },
  ],
};
