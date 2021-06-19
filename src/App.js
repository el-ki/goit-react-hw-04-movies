import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundView from "./view/NotFoundView";
import routes from "./routes";
import AppBar from "./components/AppBar";

const HomeView = lazy(() =>
  import("./view/HomeView" /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import("./view/MoviesView" /* webpackChunkName: "movies-view" */)
);
const MovieDetailsView = lazy(() =>
  import("./view/MovieDetailsView" /* webpackChunkName: "book-details-view" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetailsView}></Route>
        <Route exact path={routes.movie} component={MoviesView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
