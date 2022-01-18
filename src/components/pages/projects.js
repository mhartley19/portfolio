import React from 'react'
import {Navbar} from '../navbar'
import {ProjectCard} from '../cards/project-card'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import blackJackImage from '../../images/bj.png'
import rpsImage from '../../images/RPS.jpeg'
import twitterImage from '../../images/tc.png'






export const Projects = () => {

    
    return(
        <>
            
        <div id='PP'> 
            <Navbar/>
            <div class="PP-allprojects-container">
                
                {/* Project Card One */}

                <div class='PP-container-one PP-containers'>
                    <ProjectCard 
                        href='https://mhartley19.github.io/blackjack-react/'
                        alt='Black Jack game'
                        src={blackJackImage}
                        class = "PP-IM IM-blackjack"
                        title="Black Jack" 
                        sub='Tech Stack: React, JavaScript' 
                        des='Black Jack game created with React, includes double down, 
                            correct Ace value based on game situation'
                        gitlink='https://mhartley19.github.io/rock-paper-scissors/'/>
                         </div>  

                {/* Project Card Two */}  

                <div class='PP-container-two PP-containers'>
                    <ProjectCard 
                        alt='Twitter Clone Image' 
                        src={twitterImage} 
                        sub="Tech Stack: Python"
                        title='Twitter Clone'
                        class ='PP-IM IM-twitter-clone'  
                        des='This is a clone of Twitter using Python, it utilizes Models and Views.
                        It featues user creation, user login, "tweets" direct messaging and notifications
                        ' 
                        gitlink="https://github.com/kenzie-se-q4/twitterclone-mhartley19"/>
                </div> 

                {/* Project Card Three */}  

                <div class='PP-container-three PP-containers'>
                    <ProjectCard title="Rock Paper Scissors" 
                        href="https://mhartley19.github.io/rock-paper-scissors/"
                        alt='Rock Paper Scissors Game'
                        class = 'PP-IM IM-rps'
                        src={rpsImage}
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