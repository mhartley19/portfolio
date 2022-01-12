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
                <CustomCard title="Black Jack" 
                            sub='Tech Stack: React, JavaScript' 
                            des='Black Jack game created with React, includes double down, 
                                correct Ace value based on game situation'
                            gitlink='https://mhartley19.github.io/rock-paper-scissors/'/>
                
                <br></br>
            
                <a href="https://mhartley19.github.io/rock-paper-scissors/">
                        <img class='projectimage RPSimage' 
                        src={require('../images/RPS.jpeg')} 
                        alt='Rock Paper Scissors Game'/>
                </a>
                <br></br>
                <CustomCard title="Rock Paper Scissors" 
                            sub='Tech Stack: Javascript, CSS, HTML' 
                            des='Rock Paper Scissors was deisnged using JavaScript, 
                            CSS and HTML, please click image for link to site'
                            gitlink='https://github.com/mhartley19/rock-paper-scissors'/>

                <br></br>
                        <img class='projectimage twitter-clone-image' 
                        src={require('../images/tc.png')} 
                        alt='Twitter Clone'/>
                <br></br>

                <CustomCard title='Twitter Clone' 
                            sub="Tech Stack: Python" 
                            des='des working' 
                            gitlink="https://github.com/kenzie-se-q4/twitterclone-mhartley19"/>
              
        
            </div>


            </>


    )
}