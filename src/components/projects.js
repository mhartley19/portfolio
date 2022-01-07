import React from 'react'
import {Navbar} from './navbar'
import {CustomCard} from './bootstrap-card'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Projects = () => {
    return(
        <div>
            <Navbar/>
            <div id="projects-container">
            

                <a href="https://mhartley19.github.io/blackjack-react/">
                    <img class='projectimage bjimage' 
                    src={require('../images/bj.png')} 
                    alt='Black Jack game'/>

                </a>
                <br></br>
                <CustomCard title="BlackJack" sub='Tech Stack: React' des='description working'/>
                
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