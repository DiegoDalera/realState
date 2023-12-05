import "./NavContainer.css";

const NavContainer = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a className="headerwrapper" href="/">
          Real Home
        </a>
      </div>
      <div className="navbar-buttons">
        <button>Home</button>
        <button>Propiedades</button>
        <button>Agentes</button>
        <button>Logueo</button>
      </div>
    </nav>
  );
};

export default NavContainer;
