"use client";
import React, { FunctionComponent } from "react";
import CentralUI from "../CentralUI";
import VideoContainer from "../VideoContainer";
import TopUI from "../TopUI";
interface GamePageContainerProps {
  data?: { id: string }[];
}
const GamePageContainer: FunctionComponent<GamePageContainerProps> = ({
  data,
}) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100vw",
        background: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopUI />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VideoContainer src={data[0].id} />
        <CentralUI />
        <VideoContainer src={data[1].id} />
      </div>
    </main>
  );
};

export default GamePageContainer;
