import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo"></CrwnLogo>
      </Link>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;
