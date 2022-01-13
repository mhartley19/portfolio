import React from 'react'
import {Navbar} from '../navbar'
import {CustomCard} from '../cards/card-projects'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



export const Projects = () => {

    
    return(
        <>
            
        <div id='project-page'> 
            <Navbar/>
            <div id="all-projects-container">
        

                {/* Project Card One */}

                <div id='project-container-one' class='project-container'>
                        <a href="https://mhartley19.github.io/blackjack-react/">
                            <img class='project-image bjimage' 
                            src={require('../../images/bj.png')} 
                            alt='Black Jack game'/>

                        </a>
                        <CustomCard title="Black Jack" 
                                    sub='Tech Stack: React, JavaScript' 
                                    des='Black Jack game created with React, includes double down, 
                                        correct Ace value based on game situation'
                                    gitlink='https://mhartley19.github.io/rock-paper-scissors/'/>
                </div>  

                
                {/* Project Card Two */}  
                
                <div id='project-container-two'class='project-container'>
                            <img class='project-image twitter-clone-image' 
                            src={require('../../images/tc.png')} 
                            alt='Twitter Clone'/>

                        <CustomCard title='Twitter Clone' 
                                    sub="Tech Stack: Python" 
                                    des='This is a clone of Twitter using Python, it utilizes Models and Views.
                                    It featues user creation, user login, "tweets" direct messaging and notifications
                                    ' 
                                    gitlink="https://github.com/kenzie-se-q4/twitterclone-mhartley19"/>
                        
                </div> 

                {/* Project Card Three */}    
                <div id='project-container-three' class='project-container'>

                
                    <a href="https://mhartley19.github.io/rock-paper-scissors/">
                            <img class='project-image RPSimage' 
                            src={require('../../images/RPS.jpeg')} 
                            alt='Rock Paper Scissors Game'/>
                    </a>
                    
                    <CustomCard title="Rock Paper Scissors" 
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