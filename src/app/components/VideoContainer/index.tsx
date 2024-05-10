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
        background: "#463D3D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <VideoPlayer src={src} />
    </section>
  );
};

export default VideoContainer;
