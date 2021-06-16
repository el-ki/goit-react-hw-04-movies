import { Component } from "react";

class Review extends Component {
  state = {
    review: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.movieId);
    console.log(this.props);
    this.setState({ review: this.props.review });
  }
  render() {
    return (
      <>
        {this.state.review.length > 0 ? (
          <ul>
            {this.props.review.map((review) => (
              <li key={review.content}>
                Author: {review.author}
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Be the first to write a review on this movie!</p>
        )}
      </>
    );
  }
}

export default Review;
