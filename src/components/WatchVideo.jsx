import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

import { FaHeart, FaHeartBroken, FaShare, FaDownload } from "react-icons/fa";

import FormatData from "../functions/FormatData";
import FormatNumber from "../functions/FormatNumber";

const WatchVideo = ({ video, channel }) => {
  const { id } = video;
  const {
    title,
    channelTitle,
    description,
    channelId,
    publishedAt,
  } = video.snippet;
  const { viewCount, likeCount, dislikeCount } = video.statistics;

  const { url } = channel.snippet.thumbnails.medium;
  const { subscriberCount } = channel.statistics;
  const location = useLocation();

  return (
    <div className="watch">
      <div>
        <iframe
          title={title}
          className="about-video"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay
        />
      </div>

      <div className="info">
        <div className="info-top">
          <div className="video-text">
            <p className="video-title u-margin-bottom-extra-small">{title}</p>
            <p className="video-secondary">
              {FormatNumber(viewCount)} views &#8226; {FormatData(publishedAt)}
            </p>
          </div>
          <div className="video-like">
            <Link to={location}>
              <FaHeart className="like__icon" />
              <p>{FormatNumber(likeCount)}</p>
            </Link>

            <Link to={location}>
              <FaHeartBroken className="like__icon" />
              <p>{FormatNumber(dislikeCount)}</p>
            </Link>

            <Link to={location}>
              <FaShare className="like__icon" />
              <p>SHARE</p>
            </Link>

            <Link to={location}>
              <FaDownload className="like__icon" />
              <p>DOWNLOAD</p>
            </Link>
          </div>
        </div>
        <div className="info-bottom">
          <div className="info-bottom__info">
            <a href={`https://www.youtube.com/channel/${channelId}`}>
              <img src={url} alt="channel" className="video__info__img" />
            </a>
            <div className="search-info">
              <a href={`https://www.youtube.com/channel/${channelId}`}>
                <p className="video-title">{channelTitle}</p>
                <p className="video-secondary u-margin-bottom-small subscriberCount">
                  {FormatNumber(subscriberCount)} subscribers
                </p>
              </a>
            </div>

            {
              <ReactMarkdown
                className="video-description"
                source={description}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
