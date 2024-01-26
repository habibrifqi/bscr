import React, { Children } from "react";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br">
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
          <h3 className="text-lg font-semibold text-center">
            &#128540;{title}
          </h3>
          <div className="max-w-md mx-auto space-y-3">
            {children}
            <div className="flex gap-1 pt-3 items-center justify-center">
              <p>
                {type === "login"
                  ? "Don't have an Account?"
                  : " Already have an ancount ?"}
              </p>
              {type === "login" && (
                <Link className="underline text-indigo-600" to="/register">
                  Register
                </Link>
              )}
              {type === "register" && (
                <Link className="underline text-indigo-600" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
