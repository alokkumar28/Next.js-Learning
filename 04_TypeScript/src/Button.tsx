import React from 'react'

type ButtonProps ={
    data:string
    action:()=>void
}

function Button({data , action}:ButtonProps) {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default Button
