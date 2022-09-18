import "./HeaderContent.css";
import { Link } from "react-router-dom";
export default function HeaderContent() {
  return (
    <div className="header">
      <div className="list">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/categoryA">
            <li>Category - A</li>
          </Link>
          <Link to="/categoryB">
            <li>Category - B</li>
          </Link>
          <Link to="/categoryC">
            <li>Category - C</li>
          </Link>
          <Link to="/categoryD">
            <li>Category - D</li>
          </Link>
          <Link to="/categoryE">
            <li>Category - E</li>
          </Link>
          <li></li>
        </ul>
      </div>
      <div className="logoImage">
        <Link to="/">
          <img
            src="/assets/photo/One-Colour-Logo-RGB-1.webp"
            alt="logo"
            className="logo"
          />
        </Link>
      </div>
    </div>
  );
}
