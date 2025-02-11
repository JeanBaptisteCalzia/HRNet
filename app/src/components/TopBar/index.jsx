import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../../components/TopBar/topBar.scss";

function Header({ link, label, hasBtn }) {
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          <h1>HRnet</h1>
        </NavLink>
        {hasBtn ? (
          <NavLink to={link} className="btn btn-secondary">
            {label}
          </NavLink>
        ) : null}
      </nav>
    </header>
  );
}

Header.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  hasBtn: PropTypes.bool,
};

export default Header;
