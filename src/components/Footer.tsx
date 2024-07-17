import logo from "../assets/oasix-logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-primary">
        <ul className="footer-navlist">
          <li>Menu</li>
          <li>Home page</li>
          <li>Marketplace</li>
        </ul>
        <div className="footer-iconlist">
          <div className="icon">
            <i className="fa-brands fa-telegram"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>

      <div className="footer-secondary">
        <p>&copy; 2024 &mdash; Copyright</p>
        <img src={logo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
