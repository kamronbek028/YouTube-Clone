import React from "react";
import { useLocation } from "react-router-dom";

import FormatLocation from "../functions/FormatLocation";

const SingleVideo = () => {
  const location = useLocation();
  const { pathname } = location;
  const slug = FormatLocation(pathname);

  return <div>{slug}</div>;
};

export default SingleVideo;
