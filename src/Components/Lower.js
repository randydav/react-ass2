import React from 'react'
import './Lower.css'
import LOGO4 from './images/Frame 14.png'
import LOGO5 from './images/Frame 14 (1).png'

function Lower() {
  return (
    <div>
      <div className='lower'>
            <h3>My Skills</h3>
            <p>Here are a few skill I possess</p>
        

        <div className='pic'>
        <img src= {LOGO4}className="logo4" alt="logo"/>
        <img src= {LOGO5}className="logo5" alt="logo"/>
        </div>
       </div>
       </div>
  )
}

export default Lower