// import { NavLink } from "react-router-dom";
// import routes from "../routes";
import Navigation from "./Navigation";

const AppBar = () => {
  return (
    <header className="AppBar">
      <Navigation />
      {/* <nav className="nav">
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movie}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </nav> */}
    </header>
  );
};

export default AppBar;
