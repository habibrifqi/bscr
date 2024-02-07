import {React,useRef,useEffect} from "react";
import FormInput from "../Elements/Input";
import { Link } from "react-router-dom";

function FormLogin() {
  const handleLogin = (event)=>{
    event.preventDefault();
    localStorage.setItem('email',event.target.email.value)
    localStorage.setItem('password',event.target.password.value)
    window.location.href = '/produk'
  }

  const emailRef =useRef(null)

  useEffect(()=>{
    emailRef.current.focus();
  },[])

  return (
    <>
      <form onSubmit={handleLogin} >
        <div>
          <FormInput name="email" type="email" placeholder="email@mail" ref={emailRef}/>
          <p className="text-sm mt-2 px-2 hidden text-gray-600">Text helper</p>
        </div>
        <div>
          <FormInput name="password" type="password" placeholder="Password" />
        </div>
        <div className="flex gap-3 pt-3 items-center">
          <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300"
          type="submit"
          >
            Login
          </button>
          <a href="#">Forgot Password</a>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
