import React from 'react'
import {Navbar} from '../navbar'
import {ProjectCard} from '../cards/project-card'
import 'bootstrap/dist/css/bootstrap.min.css'
import blackJackImage from '../../images/bj.png'
import rpsImage from '../../images/RPS.jpeg'
import twitterImage from '../../images/tc.png'






export const Projects = () => {

    
    return(
        <>
            
        <div id='PP'> 
            <Navbar/>
                
                {/* Project Card One */}
                <h1 class="PP-header">deployed Projects</h1>
                <div class='PC-container-all'>
                    
                    <ProjectCard 
                        imageAlt='Black Jack game'
                        imageSrc={blackJackImage}
                        imageClass = "PP-IM IM-blackjack"
                        PCclass= "PC PC-one"
                        linkButtonHref='https://mhartley19.github.io/blackjack-react/'
                        linkButtonID = "Sitelink-BlackJack"
                        modalButtonID= "Modal-BlackJack"
                        buttonClass = "sitelink-button"
                        title="Black Jack" 
                        infoHeader="Blackjack"
                        stack="React, CSS"
                        des='Black Jack game created with React, includes double down, 
                            correct Ace value based on game situation'
                        gitLink='https://mhartley19.github.io/rock-paper-scissors/'/>
 
                    <ProjectCard 
                        imageAlt='Twitter Clone Site'
                        imageSrc={twitterImage}
                        imageClass = "PP-IM IM-Twitter"
                        PCclass= "PC PC-two"
                        modalButtonID= "Modal-BlackJack"
                        buttonClass = "sitelink-button"
                        title="Black Jack"
                        infoHeader="Twitter Clone"
                        stack="React, CSS" 
                        des='Black Jack game created with React, includes double down, 
                            correct Ace value based on game situation'
                        gitLink='https://mhartley19.github.io/rock-paper-scissors/'/>
                    <ProjectCard 
                        imageAlt='Rock Paper Scissors game'
                        imageSrc={rpsImage}
                        imageClass = "PP-IM IM-Rock-Paper-Scissors"
                        PCclass= "PC PC-three"
                        linkButtonHref="https://mhartley19.github.io/rock-paper-scissors/"
                        linkButtonID = "Sitelink-BlackJack"
                        modalButtonID= "Modal-BlackJack"
                        buttonClass = "sitelink-button"
                        title="Black Jack" 
                        infoHeader="Rock Paper Scissors "
                        stack="JavaScript, HTML, CSS" 
                        des='Black Jack game created with React, includes double down, 
                            correct Ace value based on game situation'
                        gitLink='https://mhartley19.github.io/rock-paper-scissors/'/>

                 

                {/* Project Card Two */}  



                {/* Project Card Three */}  


                </div> 
            

        </div>   
        </>


    )
}