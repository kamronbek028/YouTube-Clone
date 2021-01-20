import React from "react";

import Title from "./Title";
import Loader from "./Loader";

const PopularVideos = ({ apiKey }) => {
  const [videos, setVideos] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=${apiKey}`
    )
      .then((result) => result.json())
      .then((result) => setVideos(result.items))
      .then(() => setLoading(false));
  }, [apiKey]);

  console.log("videos", videos);
  console.log("loading", loading);

  return (
    <div className="popular-videos">
      <Title title="Popular Videos" />
      {loading && <Loader />}
    </div>
  );
};

export default PopularVideos;
