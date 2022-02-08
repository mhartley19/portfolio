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
                <ul class='contact-list'>
                    <li>
                            <img class='logo' src={emailLogo} alt="logoimage"></img>
                            mike.hartley.80@gmail.com
                    </li>
                    <li>
                            <img class='logo' src={phoneLogo} alt="logoimage"></img>
                            408-480-1715
                    </li>
                    <li>
                        <a  class="contactLink"
                            href="https://www.linkedin.com/in/mikehartley1/">
                            <img class='logo' src={linkedInLogo} alt="logoimage"></img>
                            LinkedIn
                            </a>
                    </li>
                    <li>
                        <a  class="contactLink"
                            href="https://github.com/mhartley19">
                            <img class='logo' src={githubLogo} alt="logoimage"></img>
                            GitHub
                            </a>
                    </li>
                    <li>
                        <a  class="contactLink"
                            href="https://docs.google.com/document/d/1M1k88KsLvkHWvoki1BM0USH8YKf7jZA0Bd77hqGXfL8/edit">
                            <img class='logo' src={resumeLogo} alt="logoimage"></img>
                            Resume
                            </a>
                    </li>
                </ul>
                
            </div>
            <div class='CC-footer'>
                <div>Thank you for visiting, hope to hear from you soon!</div>
            </div>

        </div>
        </>
    )
}