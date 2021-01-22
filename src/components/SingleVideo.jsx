import React from "react";
import { useHistory } from "react-router-dom";

const SingleVideo = () => {
  let history = useHistory();
  console.log(history);

  return <div>{history}</div>;
};

export default SingleVideo;
