import React from "react";

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

  const { medium } = channel.snippet.thumbnails;
  const { subscriberCount } = channel.statistics;

  return (
    <iframe
      className="about-video"
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      autoPlay
    ></iframe>
  );
};

export default WatchVideo;
