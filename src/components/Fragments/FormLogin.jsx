import React from "react";
import FormInput from "../Elements/Input";
import { Link } from "react-router-dom";

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
        <div className="flex gap-1 pt-3 items-center justify-center">
        <p>Don't have an Account?</p> <Link className='underline text-indigo-600' to="/register">Register</Link>
         </div>
      </form>
    </>
  );
}

export default FormLogin;
