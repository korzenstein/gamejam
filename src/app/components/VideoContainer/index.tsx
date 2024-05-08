"use client";

import VideoPlayer from "../VideoPlayer";

const VideoContainer = () => {
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
      <VideoPlayer />
    </section>
  );
};

export default VideoContainer;
