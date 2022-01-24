import React from "react";
import Arrow from "./Arrow";
import Topsectionbtn from "./Topsectionbtn";
import Topsocialicons from "./Topsocialicons";


const Topsection = () => {
  return (
    <div className="topsection-container">
        <div>
          
        </div>

      <div className="top-title">
        <h1>DIEZMA</h1>
      </div>

      <div className="top-subtitle">
        <h2>Frontend Developer and Graphic Designer</h2>
      </div>

      <div>
        <Topsocialicons/>
      </div>

      <div>
          <Topsectionbtn/>
      </div>

      <div>
        <Arrow/>
      </div>

    </div>
  );
};

export default Topsection;
