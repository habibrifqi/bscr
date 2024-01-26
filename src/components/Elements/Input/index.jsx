import React from "react";
import Input from "./Input";
import Label from "./Label";

function FormInput(props) {
    const {name,type,placeholder} = props

  return (
    <>
        <div>
         <Label htmlFor={name}>{name}</Label>
         <Input name={name} type={type} placeholder={placeholder} />
        </div>
    </>
  );
}

export default FormInput;
