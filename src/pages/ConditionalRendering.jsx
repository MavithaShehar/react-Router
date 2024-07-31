import React from 'react'
import HeaderContent from "../componets/HeaderContend/HeaderContent"

// ConditionalRendering waladi wenne "if" oparater eka wage thama eke If vidiyata wada karanne && ve. (if wenuwata pavichchi karai)


function ConditionalRendering() {

    const names = ['amal','vimal','kasun'];
    const namesCount = names.length;

  return (
    <>
      <div id='wrapper'>

        <HeaderContent/>
        
        <div className='body'>
          <h2 style={{margin:10}}>Conditional Rendering</h2>

          <h3 style={{margin:10}}>Conditional Rendering && Operrater</h3>

          {namesCount > 0 && names.map((name)=>{
            return <h4>{name}</h4>
          })} 
          {namesCount == 0 && <p style={{color:"red"}}>Name List Emoty</p> } 

          {/* /////////////////////////////////////////////////////////////////////////////// */}

          <h3 style={{margin:10}}>Conditional Rendering ?( Ternary Operator) Operrater</h3>
              
          {namesCount > 0 ? (names.map((name)=>{
            return <h4>{name}</h4>
          })) : (<p style={{color:"red"}}>Name List Emoty</p> ) } 


        </div>
      
      </div>
     
    </>
  
  )
}

export default ConditionalRendering