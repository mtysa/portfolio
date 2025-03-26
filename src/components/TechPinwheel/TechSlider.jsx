import React from "react";
import "./TechSlider.css";

const techLogos = [
  "html5",
  "css3",
  "javascript",
  "react",
  "git",
  "github",
  "mongodb",
  "nodejs",
  "figma",
  "photoshop",
  "restapi",
  "salesforce",
];

const TechSlider = () => {
  return (
    <div id="about" className="slider-container">
      <div className="slider-track">
        {techLogos.concat(techLogos).map((logo, index) => (
          <div className="slider-item" key={index} title={logo.toUpperCase()}>
            <img
              src={`${import.meta.env.BASE_URL}logos/${logo}.svg`}
              alt={logo}
              className="slider-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
