import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithubAlt, faBehance, faCodepen} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faChevronDown} from '@fortawesome/free-solid-svg-icons'



const Topsocialicons = () => {
    return (
        
        <div className="top-social-icons-container">
            
            
            <div className="container-icons ico-h">
                <a  href="https://www.linkedin.com/in/sanchezdiezma/" target = "_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
           
                
            <div className="container-icons ico-h">
                <a href="https://github.com/sanchezdiezma" target="_blank"><FontAwesomeIcon icon={faGithubAlt} /></a>
            </div>

            <div className="container-icons ico-h">
                <a href="https://codepen.io/gsusmaria" target="_blank"><FontAwesomeIcon icon={faCodepen} /></a>
            </div>
                
            <div className="container-icons ico-h">
                <a href="https://www.behance.net/sanchezdieb47b" target="_blank"><FontAwesomeIcon icon={faBehance}/></a>
            </div>

            <div className="container-icons ico-h">
                <a  href="mailto:sanchezdiezma@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            

            
              
        </div>
           
           )
       }
                

                
                
               
           


            

export default Topsocialicons;