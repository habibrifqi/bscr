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
        {/* <CardFooter> */}
            <Typography variant="small" className="pb-4 flex justify-center">
            {type === "login"
                  ? `Don't have an account?`
                  : " Already have an ancount ?"}
              {/* <Typography
                
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              > */}
                 {type === "login" && (
                <Link    className="ml-1 font-bold" to="/register">
                  Sign up
                </Link>
              )}
              {type === "register" && (
                <Link    className="ml-1 font-bold" to="/login">
                  Login
                </Link>
              )}
              {/* </Typography> */}
            </Typography>
          {/* </CardFooter> */}
        </Card>
      </div>
    </>
  );
};

export default AuthLayouts;
