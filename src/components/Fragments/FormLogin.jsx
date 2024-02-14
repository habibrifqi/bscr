import {React,useRef,useEffect} from "react";
import FormInput from "../Elements/Input";
import { Link } from "react-router-dom";
import { login } from "../../services/auth.service";
import { useState } from "react";
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

function FormLogin() {
  const [loginFailed,setLoginFailed] = useState('')
  const handleLogin = (event)=>{
    event.preventDefault();
    // localStorage.setItem('email',event.target.email.value)
    // localStorage.setItem('password',event.target.password.value)
    const data = {
      username :event.target.username.value,
      password: event.target.password.value
    }
    login(data,(status,res)=>{
      if (status) {
        localStorage.setItem("token",res)
        window.location.href = '/produk'
      }else{
        setLoginFailed(res)
      }
    })
  }

  const containerRef  = useRef()

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
      <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4">
          <FormInput name="username" type="text" placeholder="Username" ref={containerRef} />

          <FormInput name="password" type="password" placeholder="Password" />
          
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
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

export default FormLogin;
