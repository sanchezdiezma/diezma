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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed consequat enim nunc, ut rutrum libero semper vitae.
                            Vivamus sit amet ante elementum, condimentum ipsum sed,
                            ultrices leo. Duis quis maximus tortor. Donec sit amet
                            dictum eros. Integer vestibulum odio tellus, sed aliquam
                            tortor convallis ac. Integer blandit risus quam, eu pellentesque
                            ipsum convallis eu. Nam egestas aliquet dui.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed consequat enim nunc, ut rutrum libero semper vitae.
                            Vivamus sit amet ante elementum, condimentum ipsum sed,
                            ultrices leo. Duis quis maximus tortor. Donec sit amet
                            dictum eros. Integer vestibulum odio tellus, sed aliquam
                            tortor convallis ac. Integer blandit risus quam, eu pellentesque
                            ipsum convallis eu. Nam egestas aliquet dui.
                        </p>

                        <img src={Vistatwowheels} alt="website Marchando" />
                        <div className="project-btn"><Btn /></div>
                        <div />
                    </div>
                </div>

                <div className="p-container">
                    <div className="project-title">
                        <h3>-Gravity-Hack-</h3>
                    </div>
                    <div className="projects-icon">
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-git-plain"></i>
                        <i class="devicon-github-original"></i>
                    </div>
                    <div className="container-text">
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed consequat enim nunc, ut rutrum libero semper vitae.
                            Vivamus sit amet ante elementum, condimentum ipsum sed,
                            ultrices leo. Duis quis maximus tortor. Donec sit amet
                            dictum eros. Integer vestibulum odio tellus, sed aliquam
                            tortor convallis ac. Integer blandit risus quam, eu pellentesque
                            ipsum convallis eu. Nam egestas aliquet dui.
                        </p>
                        <img src={Vistagravity} alt="website Marchando" />
                        <div className="project-btn"><Btn /></div>
                        <div />
                    </div>
                </div>

                <div className="p-container">
                    <div className="project-title">
                        <h3>-DIEZMA-</h3>
                    </div>
                    <div className="projects-icon">
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-git-plain"></i>
                        <i class="devicon-github-original"></i>
                    </div>

                    <div className="container-text">
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed consequat enim nunc, ut rutrum libero semper vitae.
                            Vivamus sit amet ante elementum, condimentum ipsum sed,
                            ultrices leo. Duis quis maximus tortor. Donec sit amet
                            dictum eros. Integer vestibulum odio tellus, sed aliquam
                            tortor convallis ac. Integer blandit risus quam, eu pellentesque
                            ipsum convallis eu. Nam egestas aliquet dui.
                        </p>
                        <img src={Vistapersonal} alt="website Marchando" />
                        <div className="project-btn"><Btn /></div>
                        <div />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projectsection;
















































