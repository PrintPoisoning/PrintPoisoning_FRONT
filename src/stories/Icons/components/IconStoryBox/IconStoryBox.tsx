import { PropsWithChildren } from "react";

const IconStoryBox = ({ children }: PropsWithChildren) => {
  return (
    <article className="w-[8rem] h-[8rem] border-[2px] border-gray-500 rounded-[0.8rem] flex justify-center items-center">
      {children}
    </article>
  );
};
export default IconStoryBox;
