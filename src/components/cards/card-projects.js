import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const CustomCard = (props) => {

    return(
      <div class='project-card'>
        <header>
            <div class='project-card-header'>
              <h3 class='project-card-title'>{props.title}</h3>
            </div>
        </header>
            <p class='project-card-subtitle'>{props.sub}</p>
        <body>
          <p class='project-card-body'>{props.des}
        </p>
        </body>
      </div>
    )
}