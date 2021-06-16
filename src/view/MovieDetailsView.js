import { Component } from "react";
import Axios from "axios";
import { NavLink, Route } from "react-router-dom";
import Cast from "../components/Cast";
import Review from "../components/Review";
import routes from "../routes";

class MovieDetailsView extends Component {
  state = {
    genres: [],
    original_title: null,
    overview: null,
    vote_average: null,
    poster_path: null,
    cast: [],
    review: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=de9614269071e01284d31f53de5b2a97`
    );
    console.log(response.data);
    this.setState({ ...response.data });

    const result = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=de9614269071e01284d31f53de5b2a97`
    );
    this.setState({ cast: result.data.cast });

    const res = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=de9614269071e01284d31f53de5b2a97`
    );
    this.setState({ review: res.data.results });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movie);
  };

  render() {
    return (
      <>
        <div className="Container">
          <button
            type="button"
            className="Back-btn"
            onClick={this.handleGoBack}
          >
            Go back
          </button>
          <div className="Movie-wrap">
            <img
              src={`https://image.tmdb.org/t/p/w300/${this.state.poster_path}`}
              alt={`${this.state.original_title}`}
            />
            <div className="Description-wrap">
              <h1> {this.state.original_title}</h1>
              <p>User score: {this.state.vote_average}</p>
              <h2>Overwiev</h2>
              <p>{this.state.overview}</p>
              <h2>Genres</h2>
              <ul>
                {this.state.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>{" "}
            </div>
          </div>
        </div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          path={`${this.props.match.path}/cast`}
          render={(props) => <Cast {...props} cast={this.state.cast} />}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={(props) => <Review {...props} review={this.state.review} />}
        />
      </>
    );
  }
}
export default MovieDetailsView;
