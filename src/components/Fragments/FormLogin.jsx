import {React,useRef,useEffect} from "react";
import FormInput from "../Elements/Input";
import { Link } from "react-router-dom";
import { login } from "../../services/auth.service";
import { useState } from "react";

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
        console.log(res.response.data)
      }
    })
  }

  

  const usernameRef =useRef(null)

  useEffect(()=>{
    usernameRef.current.focus();
  },[])

  return (
    <>
      <form onSubmit={handleLogin} >
        <div>
          <FormInput name="username" type="text" placeholder="Username" ref={usernameRef}/>
       
        </div>
        <div>
          <FormInput name="password" type="password" placeholder="Password" />
        </div>
        {loginFailed &&   <p className="text-sm mt-2 px-2 text-red-600 text-center">{loginFailed}</p>}
      
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
