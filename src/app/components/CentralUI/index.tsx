"use client";
import useGamJamStore from "@/app/store/gamJamStore";
const CentralUI = () => {
  const { setPlayer1Score, setPlayer2Score } = useGamJamStore();
  return (
    <>
      <div
        style={{
          width: "100px",
          background: "yellow",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button>Button</button>
      </div>
    </>
  );
};

export default CentralUI;
