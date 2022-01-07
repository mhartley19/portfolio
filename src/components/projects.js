import React from 'react'
import {Navbar} from './navbar'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Projects = () => {
    return(
        <div>
            <Navbar/>
            <div id="projects-container">
                <h3>Rock Paper Scissors</h3>
            
                <a href="https://mhartley19.github.io/rock-paper-scissors/">
                <img class='projectimage RPSimage' 
                    src={require('../images/RPS.jpeg')} 
                    alt='Rock Paper Scissors Game'/>
                
                
                </a>


            
            
            </div>


        </div>
    )
}