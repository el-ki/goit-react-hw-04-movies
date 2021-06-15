import { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=de9614269071e01284d31f53de5b2a97"
    );
    console.log(response.data);
    this.setState({ movies: response.data.results });
  }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
