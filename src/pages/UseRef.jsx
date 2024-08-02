import React, { useEffect, useRef, useState } from 'react'
import HeaderContent from "../componets/HeaderContend/HeaderContent";

function UseRef() {

    const [input,setInput] = useState("< Set Your Input Hear >");
    const [count,setCount] = useState(0)

    const countRef = useRef(0);

    function handleChange (e){
        if(e.target.value.length == 0){
            setInput("< Set Your Input Hear >");
        }else{
            setInput(e.target.value);
        }
    }

    useEffect(()=>{
        // setCount((count => count+1))

        countRef.current = countRef.current + 1 ;
    })

    return (

    <>
    <HeaderContent/>


    <div>
        <input type="text" onChange={handleChange} />
        <p>your input {input} </p>
        <p>rendered {countRef.current}</p>
    </div>
    
    </>
    
  )
}

export default UseRef