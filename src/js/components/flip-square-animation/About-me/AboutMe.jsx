import React from "react";
import "./about-me.css"

const AboutMe = props => {
  return <div className="about-me-container">{props.open ? <h1 className="about-me-header">About Me</h1> : <div className="about-me-text">
      I'm a 27 year old Norwegian that has a massive passion for programming and computers.
      </div>}</div>;
};

export default AboutMe;
