import { Component } from "react";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.movieId);
    console.log(this.props.cast);
    this.setState({ cast: this.props.cast });
  }

  render() {
    return (
      <>
        <ul>
          {this.props.cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={`${actor.name}`}
              />
              {actor.name}
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
