
import React from 'react'
import HeaderContent from "../componets/HeaderContend/HeaderContent"

function RestOperator() {

// Rest Operator    
let total =0; 
function sume(...sumnumbers){
    sumnumbers.forEach(sumnumber => {
        total = total + sumnumber
    })
    return total

}

console.log(sume(1,3,5,5,6,3,3))

  return (
    <>
    <HeaderContent/>  
    
    <div> 
    </div>
    </>
  )
}

export default RestOperator