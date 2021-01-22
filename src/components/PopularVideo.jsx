import React from "react";
import { Link } from "react-router-dom";

import FormatData from "../functions/FormatData";
import FormatNumber from "../functions/FormatNumber";
import LimitTitle from "../functions/LimitTitle";

const PopularVideo = ({ videos }) => {
  return (
    <>
      {videos &&
        videos.map((video, index) => {
          const { channelTitle, publishedAt, title } = video.snippet;
          const { url } = video.snippet.thumbnails.medium;
          const { id } = video;
          const { viewCount } = video.statistics;

          return (
            <Link to={`/watch?v=${id}`} key={index}>
              <div className="video">
                <img src={url} alt={title} className="video__img" />
                <div className="video__info">
                  <p className="video-title">{LimitTitle(title)}</p>
                  <p className="video-secondary">{channelTitle}</p>
                  <p className="video-secondary">
                    {FormatNumber(viewCount)} &#8226; {""}
                    {FormatData(publishedAt)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default PopularVideo;
