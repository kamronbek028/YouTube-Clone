import React from "react";
import { useLocation } from "react-router-dom";

import Loader from "./Loader";
import WatchVideo from "./WatchVideo";
import RelatedVideos from "./RelatedVideos";
import FormatLocation from "../functions/FormatLocation";

const SingleVideo = () => {
  const location = useLocation();
  const { pathname } = location;
  const slug = FormatLocation(pathname);

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [watchVideo, setWatchVideo] = React.useState();
  const [channel, setChannel] = React.useState();
  const [relatedVideos, setRelatedVideos] = React.useState();
  const [loadingWatch, setLoadingWatch] = React.useState(true);
  const [loadingRelated, setLoadingRelated] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${slug}&key=${apiKey}`
    )
      .then((result) => result.json())
      .then((result) => setWatchVideo(result.items[0]));
  }, [apiKey, slug]);

  React.useEffect(() => {
    if (watchVideo) {
      const { channelId } = watchVideo.snippet;

      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`
      )
        .then((result) => result.json())
        .then((result) => setChannel(result.items[0]))
        .then(() => setLoadingWatch(false));
    }
  }, [apiKey, watchVideo]);

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${slug}&type=video&maxResults=${14}&key=${apiKey}`
    )
      .then((result) => result.json())
      .then((result) => setRelatedVideos(result.items))
      .then(() => setLoadingRelated(false));
  }, [apiKey, slug]);

  console.log("loaderWatch", loadingWatch);
  console.log("watchVideo", watchVideo);
  console.log("loaderRelated", loadingRelated);
  console.log("relatedVideos", relatedVideos);

  return (
    <div className="single-video">
      <div className="watch">
        {loadingWatch ? (
          <Loader />
        ) : (
          <WatchVideo video={watchVideo} channel={channel} />
        )}
      </div>
      <div className="next">
        {loadingRelated ? (
          <Loader />
        ) : (
          <RelatedVideos relatedVideos={relatedVideos} />
        )}
      </div>
    </div>
  );
};

export default SingleVideo;
