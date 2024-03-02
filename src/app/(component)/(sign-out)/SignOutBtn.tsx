"use client";

import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <button
      className="btn btn-primary-content"
      onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
    >
      Logout
    </button>
  );
}
