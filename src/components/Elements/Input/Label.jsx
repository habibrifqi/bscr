import React from 'react'

function Label(props) {
    const {htmlFor,children} = props
  return (
   <>
      <label className="block py-1" htmlFor={htmlFor} >{children}</label>
   </>
  )
}

export default Label