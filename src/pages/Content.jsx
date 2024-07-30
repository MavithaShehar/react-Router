import React, { useState } from 'react'
import HeaderContent from "../componets/HeaderContend/HeaderContent"
import './Content.css'

function Content() {

    const [num,setNum] = useState(0) 

    function check(){
        if(num === 0 || num < 0){
           alert("number is 0");     
        }
    }

    function incressNumber(){
        check();
        setNum(num+1)
    }

    function digressNumber(){
        check();
        setNum(num-1)
    }


    
  return (
    <>
    <div id='wrapper'>

      <HeaderContent/>

    <div className='body'> 
    <h2>{num}</h2>
    <button style={{margin:10}} onClick={incressNumber}>+ Click</button>
    <button onClick={digressNumber}>- Click</button>
    </div>  
    

    </div>
   
  </>
  )
}

export default Content