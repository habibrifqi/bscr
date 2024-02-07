import { useRef,forwardRef } from "react"

const Input = forwardRef((props,ref) =>{
    const { type , placeholder, name} =props
    return (
        <>
             <input
                type={type}
                placeholder={placeholder}
                name ={name}
                id={name}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                ref ={ref}
              />
        </>
    )
});

export default Input