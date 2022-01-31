import React from 'react'
import {Navbar} from '../navbar'
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomepageCard } from '../cards/hompage-card'
import lunaImage from '../../images/luna.jpeg'
// import {card} from 'react-bootstrap'


export const Home = () => {
    return(
        <div>
            <Navbar/>
        <HomepageCard 
            imageSrc={lunaImage}
            imageAlt="Luna"
            imageClass="HP-image"
        />
        
    </div>

    
    



        
    )
}