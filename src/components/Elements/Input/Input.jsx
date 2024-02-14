import { useRef, forwardRef, useEffect } from "react";

import { Input as MaterialInput } from "@material-tailwind/react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;

  console.log(ref)
  return (
    <>
      <MaterialInput
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        label={name}
        ref={ref}
        className=""
      />
      {/* <input
                type={type}
                placeholder={placeholder}
                name ={name}
                id={name}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                ref ={ref}
              /> */}
    </>
  );
});

export default Input;
