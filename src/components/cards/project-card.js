import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {imageSRC} from '../../images/index'



export const ProjectCard = (props) => {

  let modalButtonText = "Open"
  
  function modalButton () {
    let modal = document.getElementById('PC-modal-closed')
    console.log(modal)
    modal.id = 'PC-modal-open'
    modalButtonText = "Close"
    console.log(modalButtonText)
  }
  

    return(
      <div id='PC'>
        <div class='PC-IM'>
        <a href={props.href}>
                          <img class={props.class}
                            src={props.src}
                            alt={props.alt}/>
                        </a>
        </div>
        <div id='PC-modal-closed'>
          <header>
              <h3 class='PC-modal-title'>{props.title}</h3>
              <p class='PC-modal-subtitle'><b>{props.sub}</b></p>
          </header>
          <body>
              <p class='PC-modal-body'>{props.des}
              </p>
          </body>
          <footer class='PC-modal-footer'>
            <a href={props.gitlink} class='PC-gitlink'>GitHub</a>
          </footer>
        </div>
          <button onClick={modalButton}>{modalButtonText}</button>
      </div>
    )
}