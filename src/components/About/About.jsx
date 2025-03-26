//a presentational component that displays information about the author
import "./About.css";
import author from "../../assets/treepic.jpg";

function About() {
  return (
    <div className="about-container">
      <img src={author} alt="Mustafa Ysa, Author" className="about__image" />
      <section className="about__bio">
        <h1 className="about__title">Meet Your Developer</h1>
        <p>
          Howdy, I’m Mustafa. I like long talks, walks on the beach, and I’m a
          Virgo... Just kidding — kind of.
        </p>
        <p>
          I originally called the Bay Area home—that’s where I met my wife,
          built lifelong memories, and developed a passion for problem-solving.
          These days, I’m based in Harrisburg, PA, but California still feels
          like home.
        </p>
        <p>
          I’ve always loved figuring things out. Whether it’s fixing something
          around the house or building out a clean UI, I get real satisfaction
          from solving problems. That mindset led me into web development, where
          I blend creativity and logic to build real-world solutions.
        </p>
        <p>
          When I’m not coding, I’m probably enjoying some Korean BBQ, checking
          out a new restaurant, or watching anime. I’m a car enthusiast, and
          you’ll definitely catch me on Call of Duty or grinding TFT ranks when
          I get some downtime.
        </p>
        <p>
          I’ve been lucky to travel quite a bit—Cancun, Hawaii, Vietnam, New
          Orleans, Houston, and honestly all across the U.S. Every place I’ve
          visited reminds me how important connection and curiosity are—two
          things I bring with me into every project.
        </p>
      </section>
    </div>
  );
}

export default About;
