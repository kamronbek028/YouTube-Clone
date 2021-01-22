import React from "react";
import { useLocation } from "react-router-dom";

import Loader from "./Loader";
import WatchVideo from "./WatchVideo";
import NextVideo from "./NextVideo";
import FormatLocation from "../functions/FormatLocation";

const SingleVideo = () => {
  const location = useLocation();
  const { pathname } = location;
  const slug = FormatLocation(pathname);

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = React.useState();
  const [channel, setChannel] = React.useState();
  const [loadingWatch, setLoadingWatch] = React.useState(true);
  const [loadingNext, setLoadingNext] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${slug}&key=${apiKey}`
    )
      .then((result) => result.json())
      .then((result) => setVideos(result.items[0]));
  }, [apiKey, slug]);

  React.useEffect(() => {
    if (videos) {
      const { channelId } = videos.snippet;

      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`
      )
        .then((result) => result.json())
        .then((result) => setChannel(result.items[0]))
        .then(() => setLoadingWatch(false));
    }
  }, [apiKey, videos]);

  console.log(videos);
  console.log(channel);
  console.log(loadingWatch);

  return (
    <div className="single-video">
      <div className="watch">{loadingWatch ? <Loader /> : <WatchVideo />}</div>
      <div className="next">{loadingNext ? <Loader /> : <NextVideo />}</div>
    </div>
  );
};

export default SingleVideo;
