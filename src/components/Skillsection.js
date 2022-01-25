import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faBasketballBall, faComment, faBrain, faGhost   } from '@fortawesome/free-solid-svg-icons'


const Skillsection = () => {
    return (
        <div className="skillsection-container">

        <div className="skills-frame-container">
            {/* <div className="skill-subtitle">
                <h2>-My Hard Skills-</h2>
            </div> */}

                <div className="title-skills">
                </div>
                <div className="icon-skills">
                    <i className="devicon-html5-plain icon"></i>
                    <i className="devicon-css3-plain icon"></i>
                    <br />
                    <i className="devicon-javascript-plain icon"></i>
                    <i className="devicon-react-original icon"></i>
                </div>
                <div className="icon-skills">
                    <i className="devicon-nodejs-plain icon"></i>
                    <i className="devicon-mongodb-plain icon"></i>
                    <br />
                    <i className="devicon-express-original icon"></i>
                    <i className="devicon-npm-original-wordmark icon"></i>
                </div>
                <div className="icon-skills">
                    <i className="devicon-git-plain icon"></i>
                    <i className="devicon-visualstudio-plain icon"></i>
                    <br />
                    <i className="devicon-github-original icon"></i>
                    <i className="devicon-heroku-original icon"></i>
                </div>


        </div>

            

            <div className="front-skills">

               
            </div>

            

            {/* <div className="skill-subtitle">
                <h2>-My Soft Skills-</h2>
            </div> */}
            <div className="soft-skills-frame-container">
                <div className="soft-container">

                    <div className="icon-soft-skills">

                        <FontAwesomeIcon icon={faSmile} />


                    </div>




                    <div className="icon-soft-skills">
                        <FontAwesomeIcon icon={faBasketballBall} />
                    </div>
                    <div className="icon-soft-skills">
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                    <div className="icon-soft-skills">
                        <FontAwesomeIcon icon={faBrain} />
                    </div>
                    <div className="icon-soft-skills">
                        <FontAwesomeIcon icon={faGhost} />
                    </div>
                </div>
            </div>
            
                
               

        </div>
    )
}

export default Skillsection;








