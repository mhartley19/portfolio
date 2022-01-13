import React from 'react'
import {Navbar} from '../navbar'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import {card} from 'react-bootstrap'

export const Home = () => {
    return(
        <div>
            <Navbar/>
        <p>Hello Home</p>
        
        <Button>Hello Button</Button>
        
        {/* <div class="card" style="width: 18rem;"> */}
            {/* <img class="card-img-top" src=".../100px180/" alt="Card image cap"/> */}
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
    </div>

    
    



        
    )
}