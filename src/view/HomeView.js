import { Component } from "react";
import Axios from "axios";
import MovieList from "../components/MovieList";

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
        <h1 className="Main-title">Trending today</h1>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomeView;
