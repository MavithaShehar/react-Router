import React from 'react'
import './ManuLinke.css'
import { Link } from "react-router-dom";
function ManuLinke(props){
    return(
        <>
          {/* <a href={props.url}
          className='link'>{props.linkname}</a>  */}
          <Link to={props.url}className='link'>{props.linkname}</Link> 
        </>

    )
}

export default ManuLinke