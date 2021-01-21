import React from "react";

import Title from "./Title";
import Loader from "./Loader";
import PopularVideo from "./PopularVideo";

const PopularVideos = ({ apiKey }) => {
  const [videos, setVideos] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=${apiKey}`
    )
      .then((result) => result.json())
      .then((result) => setVideos(result.items))
      .then(() => setLoading(false));
  }, [apiKey]);

  return (
    <div className="popular-videos">
      <Title className="popular-videos__heading" title="Popular Videos" />
      {loading ? <Loader /> : <PopularVideo videos={videos} />}
    </div>
  );
};

export default PopularVideos;
