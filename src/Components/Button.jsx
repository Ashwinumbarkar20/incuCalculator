import React from 'react'
import './Button.css'
export default function Button({handleClick,data}) {
  return (
    <>
     <span onClick={handleClick} className='calc-Button'>{data}</span> 
    </>
  )
}
