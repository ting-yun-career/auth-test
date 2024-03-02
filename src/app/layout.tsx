import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "./Provider";
import { OpenSans, inter } from "./fonts";
import SignOutBtn from "./(component)/(sign-out)/SignOutBtn";

export const metadata: Metadata = {
  title: "NextJS Demo",
  description: "Author: Ting Yun, 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
