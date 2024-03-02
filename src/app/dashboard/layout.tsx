import type { Metadata } from "next";
import SignOutBtn from "../(component)/(sign-out)/SignOutBtn";

export const metadata: Metadata = {
  title: "NextJS Demo: Dashboard",
  description: "Author: Ting Yun, 2024",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-end w-full bg-teal-500 p-[1rem]">
        <SignOutBtn />
      </div>
      {children}
    </>
  );
}
