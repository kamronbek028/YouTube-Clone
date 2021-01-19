import React from "react";

import { LeftLinks, RightLinks } from "../constants/navLinks";
import SearchForm from "../components/SearchForm";

const Navbar = () => {
  return (
    <nav className="nav">
      <LeftLinks />
      <SearchForm />
      <RightLinks />
    </nav>
  );
};

export default Navbar;
