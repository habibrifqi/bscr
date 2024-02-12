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

  

  const usernameRef =useRef(null)

  useEffect(()=>{
    usernameRef.current.focus();
  },[])

  return (
    <>
     <Card className="w-96">
      
          <form onSubmit={handleLogin} >
          <CardBody className="flex flex-col gap-4">
          <FormInput name="username" type="text" placeholder="Username" ref={usernameRef}/>
            {/* <Input label="Password" size="lg" type="password" /> */}
          <FormInput name="password" type="password" placeholder="Password" />
          {loginFailed &&   <p className="text-sm mt-2 px-2 text-red-600 text-center">{loginFailed}</p>}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
         
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
          </form>
        </Card>
      {/* <form onSubmit={handleLogin} >
      
        {loginFailed &&   <p className="text-sm mt-2 px-2 text-red-600 text-center">{loginFailed}</p>}
      
        <div className="flex gap-3 pt-3 items-center">
          <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300"
          type="submit"
          >
            Login
          </button>
          <a href="#">Forgot Password</a>
        </div>
      </form> */}
    </>
  );
}

export default FormLogin;
