import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const SearchForm = (props) => {
  const [query, setQuery] = React.useState();

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(e.target[0].value);
        props.history.push(`/query/${query}`);
      }}
    >
      <input type="text" className="search__input" placeholder="Search" />
      <button className="search__button">
        <FaSearch className="search__button__icon" />
      </button>
    </form>
  );
};

export default withRouter(SearchForm);
