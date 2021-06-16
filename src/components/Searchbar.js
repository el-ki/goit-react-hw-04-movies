import { Component } from "react";

class Searchbar extends Component {
  state = {
    input: "",
  };

  handleInputChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ input: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
    this.reset();
  };

  reset = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
export default Searchbar;
