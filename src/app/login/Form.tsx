"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEvent } from "react";

type Inputs = {
  email: string;
  password: string;
};

const Form = () => {
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    signIn(
      "credentials",
      {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      { callbackUrl: "/dashboard" }
    );
  };

  return (
    <>
      <form onSubmit={(e) => formSubmit(e)}>
        <h2 className="mt-12 mx-auto w-full text-xl mt-20 sm:text-2xl font-semibold">
          Sign In
        </h2>
        <fieldset className="mt-10">
          <label className="w-full" htmlFor="email">
            Email
          </label>
          <input name="email" type="text" className="w-full" />
        </fieldset>
        <fieldset className="mt-10">
          <label className="w-full" htmlFor="password">
            Password
          </label>
          <input name="password" type="password" className="w-full" />
        </fieldset>
        <button type="submit" className="btn btn-primary w-full mt-12">
          Sign in
        </button>
      </form>
      <div className="flex items-center justify-between mt-6">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <Link href="/register" className="btn btn-neutral w-full mt-6">
        Sign up
      </Link>
    </>
  );
};

export default Form;
