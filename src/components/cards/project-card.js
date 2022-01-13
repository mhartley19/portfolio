import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ProjectCard = (props) => {

    return(
      <div id='PC'>
        <header class='PC-header'>
            <div class='PC-title-container'>
              <h3 class='PC-title'>{props.title}</h3>
            </div>
        </header>
            <p class='PC-subtitle'><b>{props.sub}</b></p>
        <body>
            <p class='PC-body'>{props.des}
            </p>
        </body>
        <footer >
          <a href={props.gitlink} class='PC-gitlink'>GitHub</a>

        </footer>
      </div>
    )
}