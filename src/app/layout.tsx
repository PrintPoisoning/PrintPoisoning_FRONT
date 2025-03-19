import "@lib/font/pretendard.css";
import "@lib/style/globals.css";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import { ToastProvider } from "@lib/components/client";
import { getStaticMeta } from "@lib/utils";

import { GlobalLayout, SessionChecker, TanstackProvider } from "./_components";
import { RootLayoutProps } from "./layout.type";

export const metadata: Metadata = getStaticMeta();

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html lang="ko-KO">
      <body>
        <SessionProvider session={session}>
          <TanstackProvider>
            <SessionChecker>
              <GlobalLayout>
                <ToastProvider>{children}</ToastProvider>
              </GlobalLayout>
            </SessionChecker>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
