import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";

const LoginPage = () => {
  return (
    <>
         <AuthLayouts title='login'>
            <FormLogin />
        </AuthLayouts>
    </>
  );
};

export default LoginPage;
