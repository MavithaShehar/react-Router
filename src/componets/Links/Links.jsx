import React from 'react'
import ManuLinke from '../ManuLinke/ManuLinke'

function Links() {
  return (

    <div className='link'>
    <ManuLinke linkname="Home" url="/" />
    <ManuLinke linkname="UseState" url="/useState" />
    <ManuLinke linkname="Conditional Rendering" url="/ConditionalRendering" />
    <ManuLinke linkname="About" url="/about" />
    <ManuLinke linkname="Contact" url="/contact" />
    <ManuLinke linkname="RestOperator" url="/restOperator" />
    <ManuLinke linkname="SpreadOperator" url="/spreadOperator" />
    
    
    </div>

  )
}

export default Links