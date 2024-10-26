import React, { useState } from 'react'
import './Calc.css'
export default function Calc() {
    const[number,setNumber]=useState(0)
  return (
    <>
      <h1>Calculator</h1>
      <div className='Display'>{number}</div>
    </>
  )
}
