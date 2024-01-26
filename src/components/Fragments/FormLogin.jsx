import React from "react";
import FormInput from "../Elements/Input";

function FormLogin() {
  return (
    <>
      <form action="">
        <div>
          <FormInput name="email" type="email" placeholder="email@mail" />
          <p className="text-sm mt-2 px-2 hidden text-gray-600">Text helper</p>
        </div>
        <div>
          <FormInput name="password" type="password" placeholder="Password" />
        </div>
        <div className="flex gap-3 pt-3 items-center">
          <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
            Login
          </button>
          <a href="#">Forgot Password</a>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
