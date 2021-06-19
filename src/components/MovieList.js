import { NavLink, withRouter } from "react-router-dom";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MovieList);
