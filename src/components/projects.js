import React from 'react'
import {Navbar} from './navbar'
import {CustomCard} from './cards/card-projects'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Projects = () => {
    return(
        <>
            
            <div id="projects-container">
            <Navbar/>
            <br></br>
            <br></br>
            <br></br>

                <a href="https://mhartley19.github.io/blackjack-react/">
                    <img class='projectimage bjimage' 
                    src={require('../images/bj.png')} 
                    alt='Black Jack game'/>

                </a>
                <br></br>
                <CustomCard title="Black Jack" sub='Tech Stack: React, JavaScript' des='description working'/>
                
                <br></br>
            
                <a href="https://mhartley19.github.io/rock-paper-scissors/">
                        <img class='projectimage RPSimage' 
                        src={require('../images/RPS.jpeg')} 
                        alt='Rock Paper Scissors Game'/>
                </a>
                <br></br>
                <CustomCard title="Rock Paper Scissors" sub='Tech Stack: Javascript' des='description working'/>
        
            </div>


            </>


    )
}