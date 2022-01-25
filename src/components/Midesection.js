import React from "react";
import PersonalIcon from './../assets/photo.png'; 

const Midesection = () => {
    return(
        <div className="mid-section-container">

        <div className="mid-frame-container">
                <div className="mid-subtitle">
                    <h2> -My Story- </h2>
                </div>

                <div className="mid-icon">
                    <img src={PersonalIcon} />
                </div>

                <div className="mid-subtitle">
                    <h3> Ad astra per Aspera </h3>
                </div>

                <div className="text-container">

                    <p className="text">
                        Hi there, my name is Jesus; I'm a curious person. I'm passionate about technology, design, art, experimenting and
                        coding. I'm always interested in anything related to the creative process. I've just graduated as a web developer from
                        Ironhack Madrid. During the nine weeks there, I had the opportunity to learn from a fantastic faculty team the following technologies:
                        <mark> Javascript (ES6), HTML5 CSS3 and the MERN stack (Mongo, Express, React, Node).</mark>
                    </p>
                    <p class="text">
                        My background is in graphic design and advertising, where I had the opportunity to work for more than a decade as an art
                        director in different industries. As a graphic designer, I learned that nothing beats the feeling of identifying a
                        problem and coming up with a solution to it.
                        Web development allows me to exercise my creativity and gives me almost endless resources to transform ideas into
                        realities. It almost feels like magic to me!
                    </p>

                    <p class="text">This principle motivated me to shift my career toward web development, and so far, it has been a fantastic journey,
                        packed with all kinds of emotions where I learn something new every day. To achieve this, I had to challenge myself
                        continuously and push myself out of my comfort zone. I am really excited about continuing my personal and career growth!
                    </p>

                    <p class="text">When I am not busy coding or designing, I love to go outdoors and enjoy nature with my bicycle, ride my motorbike or
                        enjoy a good meal with my buddies.
                    </p>
                </div>
        </div>

        

        </div>
    )
}

export default Midesection;