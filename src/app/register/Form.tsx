"use client";

import styles from "./Form.module.css";
import { useFormState } from "react-dom";
import { register } from "./action";

const Form = () => {
  const [formState, formAction] = useFormState(register, null);

  return (
    <form
      action={formAction}
      autoComplete="off"
      className={`${styles.form_container} -mt-2 flex justify-center items-center flex-col`}
    >
      <fieldset className="w-full mx-4 flex justify-center items-center flex-col">
        <div className="w-full px-2">
          <label htmlFor="lastName" className="text-sm">
            First Name
          </label>
          <input
            name="username"
            type="text"
            autoComplete="false"
            className="p-3 w-full"
          />
        </div>
        <div className="w-full px-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            name="email"
            type="text"
            autoComplete="off"
            className="p-3 w-full"
          />
        </div>

        <div className="w-full px-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            className="p-3 w-full"
          />
        </div>
      </fieldset>
      {JSON.stringify(formState)}
      <button type="submit" className="btn btn-primary w-full mt-6">
        Register
      </button>
    </form>
  );
};

export default Form;
