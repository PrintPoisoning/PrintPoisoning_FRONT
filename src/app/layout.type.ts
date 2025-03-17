import { Session } from "next-auth";

import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: ReactNode;
  session: Session | null;
}>;
