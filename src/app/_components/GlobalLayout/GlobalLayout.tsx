import { PropsWithChildren } from "react";

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return <main className="max-w-layout w-full h-full shadow-layout_shadow overflow-hidden">{children}</main>;
};

export default GlobalLayout;
