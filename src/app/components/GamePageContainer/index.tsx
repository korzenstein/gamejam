"use client";

import CentralUI from "../CentralUI";
import VideoContainer from "../VideoContainer";

const GamePageContainer = ({ data }) => {
  console.log(data);
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
      <VideoContainer src={data[0].id} />
      <CentralUI />
      <VideoContainer src={data[1].id} />
    </main>
  );
};

export default GamePageContainer;
