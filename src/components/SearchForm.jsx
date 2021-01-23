import React from "react";
import { useHistory } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const history = useHistory();
  const [query, setQuery] = React.useState();

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(e.target[0].value);
        e.target[0].value = "";
      }}
    >
      <input type="text" className="search__input" placeholder="Search" />
      <button
        onClick={history.push(`/query/${query}`)}
        className="search__button"
      >
        <FaSearch className="search__button__icon" />
      </button>
    </form>
  );
};

export default SearchForm;
