import { NavLink } from "react-router-dom";
import "../../components/Header/header.scss";

function Header({ link, label }) {
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          <h1>HRnet</h1>
        </NavLink>
        <NavLink to={link} className="btn btn--primary">
          {label}
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
