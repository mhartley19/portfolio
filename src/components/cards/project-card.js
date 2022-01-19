import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {imageSRC} from '../../images/index'
import {useState} from 'react'



export const ProjectCard = (props) => {

  const [modalButtonText, setModalButtonText] = useState("Open")
  


    return(
      // <div id='PC'>
        <div class='PC'>
            <img class={props.imageClass}
                        src={props.imageSrc}
                        alt={props.imageAlt}/>
          <div class="PC-buttons">
            <a href={props.linkButtonHref}>
              <button id={props.linkButtonID}
                      class={props.buttonClass}>
                      Link
              </button>
            </a>
              <button id={props.modalButtonID}
                      class={props.buttonClass}
                  >
                      Modal
              </button>
          </div>
        </div>



        // <div id='PC-modal-closed'>
        //   <header>
        //       <h3 class='PC-modal-title'>{props.title}</h3>
        //       <p class='PC-modal-subtitle'><b>{props.sub}</b></p>
        //   </header>
        //   <body>
        //       <p class='PC-modal-body'>{props.des}
        //       </p>
        //   </body>
        //   <footer class='PC-modal-footer'>
        //     <a href={props.gitLink} class='PC-gitlink'>GitHub</a>
        //   </footer>
        // </div>
      // </div>
    )
}