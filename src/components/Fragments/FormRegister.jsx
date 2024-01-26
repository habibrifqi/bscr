import React from "react";
import FormInput from "../Elements/Input";
import { Link } from "react-router-dom";

function FormRegister() {
  return (
    <>
      <form action="">
      <div>
          <FormInput name="text" type="text" placeholder="full name" />
          <p className="text-sm mt-2 px-2 hidden text-gray-600">Text helper</p>
        </div>
        <div>
          <FormInput name="email" type="email" placeholder="email@mail" />
          <p className="text-sm mt-2 px-2 hidden text-gray-600">Text helper</p>
        </div>
        <div>
        <FormInput name="password" type="password" placeholder="Password" />
        </div>
        <div>
        <FormInput name="password_confirm" type="password" placeholder="Confirm Password" />
        </div>
        <div className="flex gap-3 pt-3 items-center">
          <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
            Register
          </button>
          <a href="#">I have account</a>
        </div>
        <div className="flex gap-1 pt-3 items-center justify-center">
            <p>you have Account ?  {' '}</p> <Link className='underline text-indigo-600' to="/login">Login</Link>
         </div>
      </form>
    </>
  );
}

export default FormRegister;
