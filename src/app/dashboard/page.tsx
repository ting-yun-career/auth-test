"use client";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <main className="mx-auto mt-4 max-w-5xl px-6">
      <button
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Logout
      </button>
    </main>
  );
}
