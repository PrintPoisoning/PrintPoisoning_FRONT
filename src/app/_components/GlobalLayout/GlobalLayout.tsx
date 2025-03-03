import { PropsWithChildren } from "react";

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="max-w-[60rem] w-full h-full shadow-layout_shadow">
      {children}
    </main>
  );
};

export default GlobalLayout;
