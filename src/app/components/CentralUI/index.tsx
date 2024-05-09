import useGamJamStore from "@/app/store/gamJamStore";

const CentralUI = () => {
  const {
    videos,
    selectedVideo,
    setPlayerScore,
    setSelectedVideo,
    playerScore,
    currentIndex,
  } = useGamJamStore();

  const handleSubmit = () => {
    const isCorrect =
      (selectedVideo === "left" &&
        videos[currentIndex].views > videos[currentIndex + 1].views) ||
      (selectedVideo === "right" &&
        videos[currentIndex + 1].views > videos[currentIndex].views);
    setPlayerScore(isCorrect);
  };

  // if (videos.length === 0 || currentIndex >= videos.length - 1) {
  //   return <div>Loading videos or no more videos available...</div>;
  // }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex" }}>
          <button onClick={() => setSelectedVideo("left")}>Left Video</button>
          <button onClick={() => setSelectedVideo("right")}>Right Video</button>
        </div>

        <button onClick={handleSubmit} disabled={!selectedVideo}>
          Submit Selection
        </button>
        <button onClick={() => console.log("change videos")}>Next Video</button>
        <div>Total Score: {playerScore}</div>
      </div>
    </>
  );
};

export default CentralUI;
