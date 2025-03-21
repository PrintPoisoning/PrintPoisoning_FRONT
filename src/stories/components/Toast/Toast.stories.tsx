import { ToastProvider } from "@lib/components/client";
import { ToastItem } from "@lib/components/client/Toast/components";
import { useToast } from "@lib/hooks";

import { Meta, StoryObj } from "@storybook/react";

/**
 * ## Toast Ui Component
 *
 * Toast UI를 편하게 사용할 수 있도록 구현한 Toast Component입니다.<br>
 * `deleteTime` option을 통해 상황에 맞춰 커스텀 할 수 있습니다.<br>
 *
 * ### use
 *
 * Toast는 Layout에 `ToastProvider`를 이용해 감싸준 후 사용 할수 있습니다.<br>
 * 이후 `useToast` hook 내부 `createToast` 함수를 이용해 Toast를 생성 할수 있습니다.<br>
 *
 * - **createToast 첫번째 인자**에 생성할 메세지를 전달합니다.
 * - **createToast 두번째 인자**에 `deleteTime`을 전달 할수 있습니다.
 *
 * <br>
 *
 * 생성 된 Toast 내부 종료 버튼을 이용해 종료할 수 있습니다.
 *
 * <br>
 *
 * ```tsx
 * import { ToastProvider } from "@lib/components/client";
 * import { useToast } from "@lib/hooks";
 *
 * const { createToast } = useToast();
 *
 * return (
 *   <ToastProvider>
 *
 *    { children }
 *
 *    <button onClick={() => createToast("Hello Toast!!" , { deleteTime: 3000 })}>
 *      Toast Open!!
 *    </button>
 *
 *   </ToastProvider>
 * )
 * ```
 *
 * ### createToast Params
 *
 * - **message**<br>
 *   첫 번째 인자에 `message`를 전달합니다.
 *
 * - **deleteTime (optional)**<br>
 *   두 번째 인자에 `deleteTime`을 전달합니다. ( default: 3000 )
 *
 * ### type
 *
 * - **message** : `string`
 *
 * <br>
 *
 * - **deleteTime ( optional )** : `number` ( ms )
 * */
const meta = {
  title: "Components/Toast",
  component: ToastItem,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    message: {
      description: "생성할 message를를 전달합니다.",
    },

    deleteTime: {
      description: "Toast가 삭제되는 시간을 변경합니다.",
    },

    onClose: {
      control: { disable: true },
    },
  },

  args: {
    message: "Hello Toast!!",
    deleteTime: 3000,
    onClose: () => {},
  },
} satisfies Meta<typeof ToastItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (_, { args }) => {
      const { createToast } = useToast();

      return (
        <main className="w-[60rem] h-[50rem] p-[10rem] overflow-hidden">
          <ToastProvider>
            <button
              className="w-[16rem] h-[5rem] bg-gray-500 rounded-radius8 text-size16 font-semibold text-white cursor-pointer"
              onClick={() =>
                createToast(args.message, {
                  deleteTime: args.deleteTime,
                })
              }
            >
              Toast Create
            </button>
          </ToastProvider>
        </main>
      );
    },
  ],
};

// export const Default: Story = {
//   args: {
//     children: (
//       <div className="w-[28rem] h-[32rem] flex items-center justify-center text-size16 font-semibold">
//         Modal
//       </div>
//     ),
//   },
//   decorators: [
//     (ModalComponent, { args }) => {
//       const [isShow, openModal, closeModal] = useModal();

//       return (
//         <main>
//           <button
//             className="w-[16rem] h-[5rem] bg-gray-500 rounded-radius8 text-size16 font-semibold text-white cursor-pointer"
//             onClick={openModal}
//           >
//             Modal Open!!
//           </button>
//           <ModalComponent args={{ ...args, isShow, onClose: closeModal }} />
//         </main>
//       );
//     },
//   ],
// };
