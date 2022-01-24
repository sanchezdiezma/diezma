import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Midesection from "./Midesection";


const Arrow = () => {
    return (
        <div className="arrow-container">
            <div className="arrow">
                <a href={Midesection}></a><FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    )
}

export default Arrow;