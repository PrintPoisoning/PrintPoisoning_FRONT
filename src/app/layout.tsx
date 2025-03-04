import "@lib/font/pretendard.css";
import "@lib/style/globals.css";

import type { Metadata } from "next";

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
          <GlobalLayout>{children}</GlobalLayout>
        </TanstackProvider>
      </body>
    </html>
  );
}
