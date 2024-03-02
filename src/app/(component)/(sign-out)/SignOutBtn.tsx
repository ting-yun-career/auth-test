"use client";

import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <button
      className="text-center bg-gray-600 hover:bg-gray-700 rounded-md p-[0.5rem] px-4 text-white cursor-pointer"
      onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
    >
      Logout
    </button>
  );
}
