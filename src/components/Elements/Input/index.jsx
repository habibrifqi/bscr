import {React,forwardRef} from "react";
import Input from "./Input";
import Label from "./Label";

const  FormInput = forwardRef((props,ref) => {
    const {name,type,placeholder} = props
    if (name == 'password') {
      
    }
  return (
    <>
        <div>
         <Label htmlFor={name}>{name}</Label>
         <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    </>
  );
})

export default FormInput;
