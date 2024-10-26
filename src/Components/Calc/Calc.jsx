import React, { useState } from 'react'
import './Calc.css'
import Button from '../Button'
export default function Calc() {
    const[number,setNumber]=useState("0")
const [oldNumber, setOldNumber] = useState(null);
const[oper,setOper]=useState(null)

   const handleNumberClick=(number)=>{
setNumber(prev => (prev === "0" ? number.toString() : prev + number));
    }


const handleEqual=()=>{
 if (oldNumber !== null && oper) {
      const result = calculate(oldNumber, number, oper);
      setNumber(result);
      setOldNumber(null); 
      setOper(null);
    }
}
const  handleOperationClick=(opertion)=>{
  if (oldNumber === null) {
            setOldNumber(number);
        } else if (opertion) {
            const result = calculate(oldNumber, number, oper);
            setNumber(result);
            setOldNumber(result);
        }
        setOper(opertion);
        setNumber("0"); 
  }

  const calculate=(old,number,oper)=>{
const prevNum = parseFloat(old);
    const currentNum = parseFloat(number);

    switch (oper) {
      case "+":
        return (prevNum + currentNum).toString();
      case "-":
        return (prevNum - currentNum).toString();
      case "*":
        return (prevNum * currentNum).toString();
      case "/":
        return currentNum !== 0 ? (prevNum / currentNum).toString() : "Error";
      default:
        return number;
    }
  }

  return (
    <div className='mainContainer'>
      <h1>Calculator</h1>
      <div className='Display' data-testid='display'>{number}</div>
            <div className='btn-Container'>
      {
      [0,1,2,3,4,5,6,7,8,9]?.map(data=>
      {
        return(
           <Button key={data} handleClick={() => handleNumberClick(data)} data={data} />
        )
      }     
      
      )}

      {
        ["+","-","*"]?.map((symbol)=>(
          <Button key={symbol} handleClick={() => handleOperationClick(symbol)} data={symbol} />
        ))
      }
      {
        ["="]?.map((symbol)=>(
          <Button key={symbol} handleClick={() => handleEqual(symbol)} data={symbol} />
        ))
      }
{
        ["C"]?.map((symbol)=>(
          <Button key={symbol} handleClick={() => {setNumber("0"); setOldNumber(null)}} data={symbol} />
        ))
      }

      </div>
    </div>
  )
}
