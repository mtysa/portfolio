import "./Footer.css";
import SnakeModal from "../SnakeModal/SnakeModal"; // ✅ Add this

function Footer() {
  return (
    <footer className="footer">
      <p className="footer_author">
        &copy; 2025 By Mustafa Ysa, for Mustafa Ysa
      </p>
      <div className="footer__links-container">
        <a
          href="https://github.com/mtysa"
          className="footer__link"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-ysa-33728a105/"
          className="footer__link"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="/resume.pdf" className="footer__link" target="_blank">
          Resume
        </a>
        <div className="footer-right">
          <SnakeModal /> {/* ✅ Game Mode button added here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
