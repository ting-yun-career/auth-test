"use client";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <main className="mx-auto mt-4 max-w-5xl px-6">
      <button
        className="text-center flex-1 mt-6 bg-gray-700 hover:bg-lightColor hover:font-semibold rounded-md p-[1rem] px-4  text-white cursor-pointer"
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Logout
      </button>
    </main>
  );
}
