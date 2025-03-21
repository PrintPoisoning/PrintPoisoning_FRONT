import { PropsWithChildren } from "react";

import { Menubar } from "@lib/containers/server";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full grow-[1]">{children}</div>
      <Menubar />
    </div>
  );
};

export default layout;
