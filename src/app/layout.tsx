import "@/lib/style/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getStaticMeta } from "@lib/utils";

import TanstackProvider from "./_components/TanstackProvider/TanstackProvider";

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
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
