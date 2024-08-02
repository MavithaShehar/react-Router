
import React from 'react'
import HeaderContent from "../componets/HeaderContend/HeaderContent"

function RestOperator() {

// Rest Operator    

// Exampel 01

let total =0; 
function sume(...sumnumbers){
    sumnumbers.forEach(sumnumber => {
        total = total + sumnumber
    })
    return total

}

console.log(sume(1,3,5,5,6,3,3))

// Example 02

function myBio(firstName,SecondName,...rest){
console.log(firstName,SecondName,rest)
}
myBio("Shehar","Mavitha","A","B","C" );

  return (
    <>
    <HeaderContent/>  
    
    <div> 
    </div>
    </>
  )
}

export default RestOperator