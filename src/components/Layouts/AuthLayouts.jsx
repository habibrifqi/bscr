import React, { Children } from "react";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <>
     <div className="flex items-center justify-center h-screen bg-gray-100">
<Card className="w-96">
    <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                {title}
                </Typography>
              </CardHeader>
              {children}
  </Card>
  </div>
      {/* <div className="flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br">
       
          <h3 className="text-lg font-semibold text-center">
            {title}
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
        </div> */}
    </>
  );
};

export default AuthLayouts;
