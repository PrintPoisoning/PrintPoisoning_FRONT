import "@lib/font/pretendard.css";
import "@lib/style/globals.css";

import type { Metadata } from "next";

import { ToastProvider } from "@lib/components/client";
import { getStaticMeta } from "@lib/utils";

import { GlobalLayout, TanstackProvider } from "./_components";

export const metadata: Metadata = getStaticMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KO">
      <body>
        <TanstackProvider>
          <GlobalLayout>
            <ToastProvider>{children}</ToastProvider>
          </GlobalLayout>
        </TanstackProvider>
      </body>
    </html>
  );
}
