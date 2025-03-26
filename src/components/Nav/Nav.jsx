import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="home nav__link">
        Home
      </a>
      <a href="#" className="portfolio nav__link">
        Portfolio
      </a>
      <a href="#about" className="about nav__link">
        About
      </a>
      <a href="#contact" className="contact nav__link">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
