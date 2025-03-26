import { Link } from "react-router-dom";
import "./Header.css";
import placeholder from "../../assets/author.jpg";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a href="#">
          <img src={placeholder} alt="Avatar" className="port__logo" />
        </a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
