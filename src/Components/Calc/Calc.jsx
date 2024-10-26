import React, { useState } from 'react'
import './Calc.css'
import Button from '../Button'
export default function Calc() {
    const[number,setNumber]=useState(0)
  return (
    <div className='mainContainer'>
      <h1>Calculator</h1>
      <div className='Display'>{number}</div>
      <div className='btn-Container'>
      {
      [0,1,2,3,4,5,6,7,8,9,"+","-","*","="].map(data=>
      {
        return(
          <Button data={data}/>
        )
      }
      
      )}
      </div>
    </div>
  )
}
