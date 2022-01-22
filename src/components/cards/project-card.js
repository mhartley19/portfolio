import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {imageSRC} from '../../images/index'
import {useState} from 'react'


export const ProjectCard = (props) => {

  const [modalButtonText, setModalButtonText] = useState("Open")
  


    return(
      // <div id='PC'>
        <div class={props.PCclass}>
            <img class={props.imageClass}
                        src={props.imageSrc}
                        alt={props.imageAlt}/>
          <div class='PC-info'> 
            <h3 class="PC-info-header">{props.infoHeader}</h3>
            <h5 class="PC-info-techStack">Tech Stack: {props.stack}</h5>
              <p>{props.des}</p>
            <div class="PC-buttons">
              <a href={props.linkButtonHref}>
                <button id={props.linkButtonID}
                        class={props.buttonClass}>
                        Link
                </button>
              </a>
              <a href={props.gitLink}>
                <button id={props.gitButtonId}
                        class={props.buttonClass}>
                        GitHub
                </button>


              </a>
            </div>
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