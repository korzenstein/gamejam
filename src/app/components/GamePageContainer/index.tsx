"use client";
import React, { FunctionComponent } from "react";
import CentralUI from "../CentralUI";
import VideoContainer from "../VideoContainer";
import TopUI from "../TopUI";
import useGamJamStore from "@/app/store/gamJamStore";

interface GamePageContainerProps {
  data?: { id: string }[];
}
const GamePageContainer: FunctionComponent<GamePageContainerProps> = ({
  data,
}) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const { currentRound } = useGamJamStore();

  console.log(data);

  const leftVideo = data[currentRound * 2].id;
  const rightVideo = data[currentRound * 2 + 1].id;
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <TopUI />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <VideoContainer src={leftVideo} />
        <CentralUI data={data} />
        <VideoContainer src={rightVideo} />
      </div>
    </main>
  );
};

export default GamePageContainer;
