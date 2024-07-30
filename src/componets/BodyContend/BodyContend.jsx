import React from "react"

import './BodyContend.css'


function BodyContend(props){
 return(
   
    <div className="content">
         {props.children}
    </div>
 
 )
}

export default BodyContend