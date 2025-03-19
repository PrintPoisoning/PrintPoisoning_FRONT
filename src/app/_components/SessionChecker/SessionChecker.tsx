"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { PropsWithChildren, useEffect } from "react";

const SessionChecker = ({ children }: PropsWithChildren) => {
  const session = useSession();
  const pathName = usePathname();

  useEffect(() => {
    if (session.data?.errorMessage) {
      signOut({ redirectTo: "/login" });
    }
  }, [pathName, session]);

  return <>{children}</>;
};

export default SessionChecker;
