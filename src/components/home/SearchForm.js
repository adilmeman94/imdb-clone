import React, { Component } from "react";

import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center box123">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search IMDb
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search your favorite movies here..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

{
  /* it wil take the state of the movies as in text in the search box in the text  prop only */
}
const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
