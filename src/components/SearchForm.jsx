import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  return (
    <form className="search">
      <input type="text" className="search__input" placeholder="Search" />
      <button className="search__button">
        <FaSearch className="search__button__icon" />
      </button>
    </form>
  );
};

export default SearchForm;
