import { Component } from "react";
import Axios from "axios";

class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=de9614269071e01284d31f53de5b2a97&query=batman"
    );
    console.log(response.data.results);
  }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h1>Search for movies</h1>
        <input></input>
        <button type="button">Search</button>
      </>
    );
  }
}

export default MoviesView;
