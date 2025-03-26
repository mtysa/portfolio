import React from "react";
import "./Portfolio.css";

import wtwr from "../../assets/projects/wtwr-page.png";
import dinnertime from "../../assets/projects/dinner-page.png";
import aroundtheus from "../../assets/projects/social-page.png";
import coffeeshop from "../../assets/projects/cafe-page.png";

const projects = [
  {
    title: "Weather Dashboard",
    image: wtwr,
    description:
      "A real-time weather app using a third-party API and responsive design.",
    liveUrl: "",
    githubUrl: "https://github.com/mtysa/se_project_react",
  },
  {
    title: "Recipe Finder",
    image: dinnertime,
    description:
      "Search and save your favorite recipes using a React-based interface.",
    liveUrl: "https://mtysa.github.io/final-dinner-frontend/",
    githubUrl: "https://github.com/mtysa/final-dinner-frontend",
  },
  {
    title: "Social Media",
    image: aroundtheus,
    description: "A mock social media platform built with MongoDB and Express.",
    liveUrl: "https://mtysa.github.io/se_project_aroundtheus/",
    githubUrl: "https://github.com/mtysa/se_project_aroundtheus",
  },
  {
    title: "Business Landing Page",
    image: coffeeshop,
    description:
      "A mock coffee shop landing page built with HTML, CSS, and responsive design.",
    liveUrl: "https://mtysa.github.io/se_project_coffeeshop/",
    githubUrl: "https://github.com/mtysa/se_project_coffeeshop",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <span>•</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="portfolio-bio">
        After years in sales, I discovered a passion for solving problems
        through code. Now, I use that same drive and communication skillset to
        build user-focused, scalable web solutions. Every project you see here
        reflects not just technical skill—but a real intention to create tools
        that matter.
      </p>
    </>
  );
};

export default Portfolio;
