import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => {
  return (
    <nav className="nav">
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
    </nav>
  );
};

export default Navigation;
