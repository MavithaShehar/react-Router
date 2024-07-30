import React from "react";
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import Links from "../Links/Links";

function HeaderContent(){

return(
    <div id="navcontent">
    
    <div>
        <img src={logo} alt="react" />
    </div>
    <Links/>




    </div>
)

}

export default HeaderContent