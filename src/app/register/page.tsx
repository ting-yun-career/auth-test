import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "AuthDemo | Register",
};

export default function Register() {
  return (
    <main className="pb-12">
      <section className="mx-auto max-w-sm">
        <h2
          className={`leading-[1.15] mt-12 text-xl sm:text-2xl font-semibold  px-2 font-Poppins`}
        >
          Create Account
        </h2>
        <Form />
      </section>
    </main>
  );
}
