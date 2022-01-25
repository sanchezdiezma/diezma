import React from "react";
import Vistamarchando from './../assets/Marchando-Website.jpg';
import Vistatwowheels from './../assets/Twowheels-Website.jpg';
import Vistagravity from './../assets/Gravity-Hack-Website.jpg';
import Vistapersonal from './../assets/Personal-Website.jpg'
import Btn from "./Btn";

const Projectsection = () => {
    return (
        <div className="projectsection-container">

            <div className="skill-subtitle">
                <h2>-Featured Projects-</h2>
            </div>

            <div className="wrap-container">

            <div className="p-container">

            <div className="project-title">
                <h3>-Marchando-</h3>
            </div>

            <div className="projects-icon">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-mongodb-plain"></i>
                <i class="devicon-git-plain"></i>
                <i class="devicon-github-original"></i>
                <i class="devicon-heroku-original"></i>
            </div>

            <div className="container-text">
                <p className="text">
                        Marchando is your go-to site for last-minute restaurant bookings. To develop this web application, I use all the skills I have equipped myself with at Ironhack. Marchando was conceptualised, designed and developed together with my classmate Alex Alcaide. Marchando is a SPA application developed on React and Node. We have integrated Google Maps API for this project and managed the media content with Cloudinary.
                </p>
               
                <img src={Vistamarchando} alt="website Marchando" />

                    <div className="project-btn"><Btn/></div>
                
                

            <div/>
            
           
            </div>
            </div>
            <div className="p-container">

                <div className="project-title">
                        <h3>-Two Wheels-</h3>
                </div>

                <div className="projects-icon">
                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-handlebars-plain"></i>
                    <i class="devicon-mongodb-plain"></i>
                    <i class="devicon-git-plain"></i>
                    <i class="devicon-github-original"></i>
                    <i class="devicon-heroku-original"></i>
                </div>

                <div className="container-text">
                    <p className="text">
                            My intermediate project at Ironhack. The main goal here was to set the foundations related to all the backend technology we had learned. The objective was to implement CRUD and to start experimenting with all APIs-related.
                    </p>

                    <img src={Vistamarchando} alt="website Marchando" />

                    <div className="project-btn"><Btn /></div>



                    <div />


                </div>
            </div>
                <div className="p-container">

                    <div className="project-title">
                        <h3>-Two Wheels-</h3>
                    </div>

                    <div className="projects-icon">
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-handlebars-plain"></i>
                        <i class="devicon-mongodb-plain"></i>
                        <i class="devicon-git-plain"></i>
                        <i class="devicon-github-original"></i>
                        <i class="devicon-heroku-original"></i>
                    </div>

                    <div className="container-text">
                        <p className="text">
                            My intermediate project at Ironhack. The main goal here was to set the foundations related to all the backend technology we had learned. The objective was to implement CRUD and to start experimenting with all APIs-related.
                        </p>

                        <img src={Vistamarchando} alt="website Marchando" />

                        <div className="project-btn"><Btn /></div>



                        <div />


                    </div>
                </div>
                <div className="p-container">

                    <div className="project-title">
                        <h3>-Two Wheels-</h3>
                    </div>

                    <div className="projects-icon">
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-handlebars-plain"></i>
                        <i class="devicon-mongodb-plain"></i>
                        <i class="devicon-git-plain"></i>
                        <i class="devicon-github-original"></i>
                        <i class="devicon-heroku-original"></i>
                    </div>

                    <div className="container-text">
                        <p className="text">
                            My intermediate project at Ironhack. The main goal here was to set the foundations related to all the backend technology we had learned. The objective was to implement CRUD and to start experimenting with all APIs-related.
                        </p>

                        <img src={Vistamarchando} alt="website Marchando" />

                        <div className="project-btn"><Btn /></div>



                        <div />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectsection;

            
            
            
            
                   


            
