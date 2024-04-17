import React from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faPlay} />

const About = ()=>{
    return(
        <>
        <div className="about" id="about">
            <div className="container">
                <h1>When a man's stomach is full it makes no difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <a href="#"> {element} Watch Our Story</a>
            </div>
        </div>
        </>
    )
}

export default About;