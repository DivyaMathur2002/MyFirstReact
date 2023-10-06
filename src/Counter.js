import React , {useState}from 'react'

export default function Counter() {
    const[num, setNum] = useState([5]);
    function Inc(){
        setNum(num+1)
    }
    function Dec(){
        setNum(num-1)
    }
    function Mul(){
        setNum(num*1)
    }
    function Div(){
        setNum(num/1)
    }

  return (
    <>
    {num}
    <button onClick={Inc}>Add</button>
    <button onClick={Dec}>Subtract</button>
    <button onClick={Mul}>Multiply</button>
    <button onClick={Div}>Divide</button>
    </>
  )
}
