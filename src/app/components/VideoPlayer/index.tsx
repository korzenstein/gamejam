// VideoPlayer.js
"use client";
import React, { FunctionComponent } from "react";
interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ src }) => {
  const videoPath = `https://www.youtube.com/embed/${src}?autoplay=${false}&loop=${false}&playlist=${src}`;
  return (
    <iframe
      width="560"
      height="315"
      src={videoPath}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={false}
      title="Embedded youtube"
      style={{ width: "100%", height: "auto", aspectRatio: "16 / 9" }}
    ></iframe>
  );
};

export default VideoPlayer;
