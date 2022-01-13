import React from 'react'
import {Navbar} from '../navbar'
import {ProjectCard} from '../cards/project-card'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



export const Projects = () => {

    
    return(
        <>
            
        <div id='PP'> 
            <Navbar/>
            <div class="PP-ap-container">
        

                {/* Project Card One */}

                <div class='PP-container-one PP-containers'>
                        <a href="https://mhartley19.github.io/blackjack-react/">
                            <img class='PP-IM IM-blackjack' 
                            src={require('../../images/bj.png')} 
                            alt='Black Jack game'/>

                        </a>
                        <ProjectCard title="Black Jack" 
                                    sub='Tech Stack: React, JavaScript' 
                                    des='Black Jack game created with React, includes double down, 
                                        correct Ace value based on game situation'
                                    gitlink='https://mhartley19.github.io/rock-paper-scissors/'/>
                </div>  

                
                {/* Project Card Two */}  
                
                <div class='PP-container-two PP-containers'>
                            <img class='PP-IM IM-twitter-clone' 
                            src={require('../../images/tc.png')} 
                            alt='Twitter Clone'/>

                        <ProjectCard title='Twitter Clone' 
                                    sub="Tech Stack: Python" 
                                    des='This is a clone of Twitter using Python, it utilizes Models and Views.
                                    It featues user creation, user login, "tweets" direct messaging and notifications
                                    ' 
                                    gitlink="https://github.com/kenzie-se-q4/twitterclone-mhartley19"/>
                        
                </div> 

                {/* Project Card Three */}    
                <div class='PP-container-three PP-containers'>

                
                    <a href="https://mhartley19.github.io/rock-paper-scissors/">
                            <img class='PP-IM IM-rps' 
                            src={require('../../images/RPS.jpeg')} 
                            alt='Rock Paper Scissors Game'/>
                    </a>
                    
                    <ProjectCard title="Rock Paper Scissors" 
                                sub='Tech Stack: Javascript, CSS, HTML' 
                                des='Rock Paper Scissors was deisnged using JavaScript, 
                                CSS and HTML, please click image for link to site'
                                gitlink='https://github.com/mhartley19/rock-paper-scissors'/>

                    
                
                </div>
            </div>

        </div>   
        </>


    )
}