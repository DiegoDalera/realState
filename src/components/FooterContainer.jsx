import "./FooterContainer.css";
import {
  Twitter ,
  Instagram,
  Facebook ,
  GeoFill,
  PhoneFill,
  EnvelopeFill,
} from "react-bootstrap-icons";

const FooterContainer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-row">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt"></i>
              <div className="cta-text">
                <GeoFill color="white" size={36} />
                <h4>Nuestra Ubicacion</h4>
                <span>Barcarce 500 - CABA - ARGENTINA</span>
              </div>
            </div>

            <div className="single-cta">
              <i className="fas fa-phone"></i>
              <div className="cta-text">
                <PhoneFill color="white" size={36} />
                <h4>Telefono</h4>
                <span>+051 55555555</span>
              </div>
            </div>

            <div className="single-cta">
              <i className="far fa-envelope-open"></i>
              <div className="cta-text">
                <EnvelopeFill color="white" size={36} />
                <h4>E mail</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-row">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    src="../../public/dd-logo.png"
                    className="img-fluid"
                    alt="logo"
                  ></img>
                </a>
              </div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="footer-widget">

              <div className="footer-widget-heading">
                <h3>Nuestras redes</h3>
              </div>

              <div className="footer-social-icon">
                <a href="#">
                 <Facebook color="white" size={36}/>
                </a>
                <a href="#">
                  <Twitter color="white" size={36}/>
                </a>
                <a href="#">
                  <Instagram color="white" size={36}/>
                </a>
              </div>

            </div>

            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Suscribete</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                  No te pierdas todos los ingresos. Suscribite dejandomos tu mail
                </p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address"></input>
                  <button>
                    <i className="fab fa-telegram-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="footer-row">
            <div className="copyright-text">
              <p>Copyright &copy; 2023, All Right Reserved </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
