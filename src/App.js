import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./view/HomeView";
import MoviesView from "./view/MoviesView";
import NotFoundView from "./view/NotFoundView";
import MovieDetailsView from "./view/MovieDetailsView";
import routes from "./routes";
import AppBar from "./components/AppBar";

// const linkStyles = {
//   base: {
//     color: "black",
//   },
//   active: {
//     color: "red",
//   },
// };

const App = () => (
  <>
    <AppBar />
    {/* <ul>
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movie}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul> */}
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route path={routes.movieDetails} component={MovieDetailsView}></Route>
      <Route exact path={routes.movie} component={MoviesView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
