import "./Main.css";
import Portfolio from "../Portfolio/Portfolio";
import TechSlider from "../TechPinwheel/TechSlider";

function Main() {
  return (
    <main>
      <h1 className="solutions-title">Solutions</h1>
      <Portfolio />

      <div className="button-group">
        <a href="mailto:mustafatysa@gmail.com" className="main-btn">
          Let’s Work
        </a>
        <a href="/resume.pdf" download className="main-btn outline">
          Download Resume
        </a>
      </div>
      <h2 className="technologies-title">Technologies</h2>
      <TechSlider />
    </main>
  );
}

export default Main;
