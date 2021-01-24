import React from "react";
import { Link, useLocation } from "react-router-dom";

import Loader from "./Loader";
import Title from "./Title";
import SidebarLinks from "../constants/sidebarLinks";

import FormatLocation from "../functions/FormatLocation";
import FormatData from "../functions/FormatData";

const SearchVideos = () => {
  const location = useLocation();
  const query = FormatLocation(location.pathname);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${50}&q=${query}`
    )
      .then((result) => result.json())
      .then((result) => setVideos(result.items))
      .then(() => setLoading(false))
      .catch(() => setLoading(true));
  }, [apiKey, query]);

  return (
    <div className="home">
      <SidebarLinks />
      <div className="search-video">
        <Title className="search-video__heading" title={query} />
        {loading ? (
          <Loader />
        ) : (
          videos &&
          videos.map((video) => {
            console.log(video);
            const { videoId } = video.id;
            const {
              title,
              channelTitle,
              description,
              publishedAt,
            } = video.snippet;
            const { url } = video.snippet.thumbnails.medium;

            return (
              <Link to={`/video/${videoId}`} key={videoId}>
                <img src={url} alt={title} className="search__img" />
                <div className="search-info">
                  <p className="video-title u-margin-extra-bottom">{title}</p>
                  <p className="video-secondary u-margin-bottom-small">
                    {channelTitle} &#8226; {FormatData(publishedAt)}
                  </p>
                  <p className="video-secondary">{description}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchVideos;
