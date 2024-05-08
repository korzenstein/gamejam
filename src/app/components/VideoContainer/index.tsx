"use client";

import VideoPlayer from "../VideoPlayer";
import React, { FunctionComponent } from "react";

interface VideoContainerProps {
  src: string;
}

const VideoContainer: FunctionComponent<VideoContainerProps> = ({ src }) => {
  return (
    <section
      style={{
        background: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VideoPlayer src={src} />
    </section>
  );
};

export default VideoContainer;
