import React from 'react'
import {Link} from 'react-router-dom'
import '../App.js'

export const Navbar = () => {
    return(
        
    <div id="NB">
        
      
        <div class='NB-container'>
            <div class='NB-title'>Mike Hartley's Portfolio</div>
                <div class='NB-link-container'>
                    <Link class='NB-link' to='/'>Home</Link>
                    <Link class='NB-link' to='/projects'>Projects</Link>
                    <Link class='NB-link' to='/contact'>Contact</Link>
                </div>
            </div>
    </div>
     

    )
}