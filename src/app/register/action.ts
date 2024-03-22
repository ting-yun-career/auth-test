"use server";

import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const register = async (formState: any, formData: FormData) => {
  const email = formData.get("email");
  const username = formData.get("username");
  const password = formData.get("password") as string;

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    fullName: username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
  } catch (err: any) {
    console.log(err);
    return {
      _form: {
        err,
      },
    };
  }

  redirect("/dashboard");
};
