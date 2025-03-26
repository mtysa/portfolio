import { useState } from "react";
import Header from "../Header/Header";
import "./App.css";
import Main from "../Main/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <About />
        <Contact />
        <Footer />
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
