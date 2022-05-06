import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import LOGO from './images/Frame 10.png'


function NavBar() {
  return (
    <div className='box'>
  
        
        <div className='nav-container'>
            <h1>Seyi <span>Onifade.</span></h1>
        

          <ul className='nav'>
            <li className='links'>
                <NavLink to='/' className='link'> About Me
                </NavLink>
            </li>

            <li className='links'>
                <NavLink to='/about'  className='link'> Services
                </NavLink>
            </li>


            <li className='links'>
                <NavLink to='/service'  className='link'> Projects
                </NavLink>
            </li>

            <li className='links'>
                <NavLink to='/contact' className='link'> Contact Me
                </NavLink>
            </li>
          </ul>
        </div>
        

        <div className='fonts'>
           <img src= {LOGO}className="logo" alt="logo"/>
        </div>
    
    </div>
  )



        
}

export default NavBar