import React from "react";
import { Link } from "react-router-dom";

import errorImage from "../assets/404.svg";

const Error = () => {
  return (
    <div className="error">
      <img className="error__img" src={errorImage} alt="404" />
      <h1 className="heading-primary">Ooops, there is no page here...</h1>
      <div className="button">
        <Link to="/">
          <button className="btn btn--error">Go home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
