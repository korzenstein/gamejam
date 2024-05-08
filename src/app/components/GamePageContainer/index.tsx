"use client";

import CentralUI from "../CentralUI";
import VideoContainer from "../VideoContainer";

const GamePageContainer = () => {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VideoContainer />
      <CentralUI />
      <VideoContainer />
    </main>
  );
};

export default GamePageContainer;
