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
  console.log(data);
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
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
        <VideoContainer src={data[0].id} />
        <CentralUI />
        <VideoContainer src={data[1].id} />
      </div>
    </main>
  );
};

export default GamePageContainer;
