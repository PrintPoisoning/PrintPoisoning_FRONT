import "@/lib/style/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getStaticMeta } from "@lib/utils";

import { GlobalLayout, TanstackProvider } from "./_components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = getStaticMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KO">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackProvider>
          <GlobalLayout>{children}</GlobalLayout>
        </TanstackProvider>
      </body>
    </html>
  );
}
