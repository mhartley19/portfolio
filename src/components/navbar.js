import React from 'react'
import {Link} from 'react-router-dom'
import '../App.js'

export const Navbar = () => {
    return(
        
    <div id="navbar">
        
      
        <div id='nav-container'>
            <div class='navtitle'>Mike Hartley's Portfolio</div>
                <div class='nav-link-container'>
                    <Link class='navlink' to='/'>Home</Link>
                    <Link class='navlink' to='/projects'>Projects</Link>
                    <Link class='navlink' to='/contact'>Contact</Link>
                </div>
            </div>
    </div>
     

    )
}