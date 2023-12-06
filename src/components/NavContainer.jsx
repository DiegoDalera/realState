import "./NavContainer.css";

import { useEffect, useState } from "react";

const NavContainer = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar-logo">
        <a className="headerwrapper" href="/">
          REAL HOME
        </a>
      </div>
      <div className="navbar-buttons">
        <button className="btn-nav">Home</button>
        <button className="btn-nav">Propiedades</button>
        <button className="btn-nav"> Agentes</button>
        <button className="btn-nav">Logueo</button>
      </div>
    </nav>
  );
};

export default NavContainer;
