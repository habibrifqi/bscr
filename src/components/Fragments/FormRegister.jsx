import React, { useEffect, useRef } from "react";
import FormInput from "../Elements/Input";
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

function FormRegister() {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      const inputElement = containerRef.current.querySelector("input");
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [containerRef]);

  return (
    <>
      <form action="">
        <CardBody className="flex flex-col gap-4">
          <FormInput
            name="username"
            type="text"
            placeholder="full name"
            ref={containerRef}
          />
          <FormInput name="email" type="email" placeholder="email@mail" />
          <FormInput name="password" type="password" placeholder="Password" />
          <FormInput
            name="password_confirm"
            type="password"
            placeholder="Confirm Password"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>
            Sign In
          </Button>
        </CardFooter>
      </form>
    </>
  );
}

export default FormRegister;
