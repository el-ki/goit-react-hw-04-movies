import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./view/HomeView";
import MoviesView from "./view/MoviesView";
import NotFoundView from "./view/NotFoundView";
import MovieDetailsView from "./view/MovieDetailsView";

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
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies/:movieId" component={MovieDetailsView}></Route>
      <Route exact path="/movies" component={MoviesView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
