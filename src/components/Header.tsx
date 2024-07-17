import "../styles/Header.css";
import logo from "../assets/oasix-logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-group">
        <div className="header-image">
          <img src={logo} alt="oasix" />
        </div>
        <div className="header-content">
          <h2>Smart property search</h2>
          <div className="input-group">
            <input type="text" placeholder="Find real estate" />
            <button className="input-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-group">
        <div className="scroll-down">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
        <div className="scroll-description">
          <p>Scroll down to learn more</p>
          <p>about the project</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
