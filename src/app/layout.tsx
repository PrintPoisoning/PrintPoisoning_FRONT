import "@lib/font/pretendard.css";
import "@lib/style/globals.css";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import { ToastProvider } from "@lib/components/client";
import { jalnanFont } from "@lib/font/jalnan.font";
import { getStaticMeta } from "@lib/utils";

import { GlobalLayout, PageChangingLoader, TanstackProvider } from "./_components";
import { RootLayoutProps } from "./layout.type";

export const metadata: Metadata = getStaticMeta();

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html
      lang="ko-KO"
      className={`${jalnanFont.variable}`}
    >
      <body>
        <SessionProvider session={session}>
          <TanstackProvider>
            <PageChangingLoader>
              <GlobalLayout>
                <ToastProvider>{children}</ToastProvider>
              </GlobalLayout>
            </PageChangingLoader>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
