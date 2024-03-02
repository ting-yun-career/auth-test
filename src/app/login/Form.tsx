"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./Form.module.css";
import { signIn, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Loader from "../loading";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

const Form = () => {
  const params = useSearchParams()!;
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  if (session.status === "loading") {
    console.log("loading");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    setError(params.get("error"));
  }, [params]);

  const formSubmit: SubmitHandler<Inputs> = (form: any) => {
    const { email, password } = form;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className={`${styles.form_container} mb-8 flex justify-center items-center flex-col`}
      >
        <h2 className="leading-[1.15] mt-12 mx-auto w-full text-xl my-6 sm:text-2xl font-semibold">
          Sign In
        </h2>
        <fieldset className="w-full flex justify-center items-center flex-col">
          <label className="w-full " htmlFor="email">
            Email
          </label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full border-solid border-[1px] border-[#EAECEF]"
          />
          {errors.email?.message && (
            <small className="block text-red-600 w-full">
              {errors.email.message}
            </small>
          )}
        </fieldset>
        <fieldset className="w-full mt-12 flex justify-center items-center flex-col">
          <label className="w-full" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full border-solid border-[1px] border-[#EAECEF]"
          />
          {errors.password?.message && (
            <small className="block text-red-600 w-full">
              {errors.password.message}
            </small>
          )}
        </fieldset>
        <button
          type="submit"
          disabled={isSubmitting || session?.status === "loading"}
          className="btn btn-primary w-full mt-6"
        >
          Sign in
        </button>
        {error && (
          <small className="block w-full px-2 text-red-600">{error}</small>
        )}
        {isSubmitting && <Loader />}
      </form>
      <div className="flex items-center justify-between">
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
