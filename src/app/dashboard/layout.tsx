import type { Metadata } from "next";
import SignOutBtn from "../(component)/(sign-out)/SignOutBtn";

export const metadata: Metadata = {
  title: "NextJS Demo: Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-end w-full p-[1rem] bg-primary">
        <SignOutBtn />
      </div>
      {children}
    </>
  );
}
