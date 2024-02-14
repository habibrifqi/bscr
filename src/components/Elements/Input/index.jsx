import { React, forwardRef, useEffect, useRef, useState } from "react";
import Input from "./Input";


const FormInput = forwardRef((props,ref) => {

  
  const { name, type, placeholder } = props;
  // console.log(ref)
  return (
    <>
      <Input label={name} name={name} type={type} placeholder={placeholder} size="lg" ref={ref} />
    </>
    
  );
});

export default FormInput;
