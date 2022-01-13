import React from 'react'
import {Navbar} from '../navbar'
import {CardContact} from '../cards/contact-card'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Contact = () => {
    return(
        <div>
            <Navbar/>

            <CardContact/>
            


        </div>
        
    )
}