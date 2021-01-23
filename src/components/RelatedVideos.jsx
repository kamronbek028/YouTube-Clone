import React from "react";
import { Link } from "react-router-dom";

import Title from "./Title";
import LimitTitle from "../functions/LimitTitle";
import FormatData from "../functions/FormatData";

const RelatedVideos = ({ relatedVideos }) => {
  return (
    <>
      <Title title="Related videos" />
      {relatedVideos &&
        relatedVideos.map((video) => {
          if (video.snippet) {
            const { videoId } = video.id;
            const { channelTitle, publishedAt, title } = video.snippet;
            const { url } = video.snippet.thumbnails.medium;

            return (
              <div className="next-video" key={videoId}>
                <Link to={`/video/${videoId}`}>
                  <img className="video__img-secondary" src={url} alt={title} />
                  <div className="search-info">
                    <p className="video-title secondary u-margin-bottom-extra-small">
                      {LimitTitle(title)}
                    </p>
                    <p className="video-tertiary">{channelTitle}</p>
                    <p className="video-tertiary">{FormatData(publishedAt)}</p>
                  </div>
                </Link>
              </div>
            );
          }
        })}
    </>
  );
};

export default RelatedVideos;
