import React from 'react'
import ManuLinke from '../ManuLinke/ManuLinke'

function Links() {
  return (

    <div className='link'>
    <ManuLinke linkname="Home" url="/" />
    <ManuLinke linkname="Content" url="/Content" />
    <ManuLinke linkname="About" url="/about" />
    <ManuLinke linkname="Contact" url="/contact" />
    <ManuLinke linkname="Login" url="/login" />
    </div>

  )
}

export default Links