import React from 'react'
import LOGO from './images/Frame 10.png'
import './Upper.css'
import LOGO2 from './images/Rectangle 2 (1).png'


function Upper() {
  return (
    <div className='all'>
        <div className='innerbox'>
           <p>Hi There</p>
           <h5>I AM SEYI ONIFADE</h5>
           <h2>A Top-notch Developer, Writer, and Mentor</h2>
           <img src= {LOGO} className="logo2" alt="logo"/>
        </div>

        
        <div className='low'>
        <img src= {LOGO2} className="logo2" alt="logo"/>
        </div>
    </div>
  )
}

export default Upper