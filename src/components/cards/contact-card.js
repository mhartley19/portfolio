import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import linkedInLogo from "../../images/linkedin.png"
import emailLogo from '../../images/email.png'
import githubLogo from '../../images/github.png'
import resumeLogo from '../../images/resume.png'
import phoneLogo from '../../images/phone.png'


export const CardContact = (props) => {
    return(
        <>
        <div id='CC'>
            <div class='CC-header'>
                <h3 class='CC-title'>Contact</h3>
            </div>
            <div class='CC-body'>
                <li>
                    <img class='logo' src={emailLogo}></img>
                    mike.hartley.80@gmail.com
                </li>
                <li>
                    <img class='logo' src={phoneLogo}></img>
                    408-480-1715
                </li>
                <li>
                    <img class='logo' src={linkedInLogo}></img>
                    <a  class="contactLink"
                        href="https://www.linkedin.com/in/mikehartley1/">
                        LinkedIn</a>
                </li>
                <li>
                    <img class='logo' src={githubLogo}></img>
                    <a  class="contactLink"
                        href="https://github.com/mhartley19">
                        GitHub</a>
                </li>
                <li>
                    <img class='logo' src={resumeLogo}></img>
                    <a  class="contactLink"
                        href="https://docs.google.com/document/d/1M1k88KsLvkHWvoki1BM0USH8YKf7jZA0Bd77hqGXfL8/edit">
                        Resume</a>
                </li>

                
            </div>
            <div class='CC-footer'>
                <p>footer</p>
            </div>

        </div>
        </>
    )
}