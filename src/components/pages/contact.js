import React from 'react'
import {Navbar} from '../navbar'
import {CardContact} from '../cards/contact-card'
import 'bootstrap/dist/css/bootstrap.min.css'



export const Contact = () => {
    return(
        <div>
            <Navbar/>
        <div id="CP">
            <div id='CC-container'>
                <CardContact/>
            </div>
        </div>
            


        </div>
        
    )
}