import { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Searchbar from "../components/Searchbar";

class MoviesView extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery } = this.state;
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=de9614269071e01284d31f53de5b2a97&query=${searchQuery}`
      );

      console.log(response.data.results);
      this.setState({ movies: response.data.results });
      this.props.location.search = this.state.searchQuery;
    }
  }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
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

export default MoviesView;
