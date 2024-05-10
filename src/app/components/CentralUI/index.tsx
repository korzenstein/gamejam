import useGamJamStore from "@/app/store/gamJamStore";
import Image from "next/image";

const CentralUI = ({ data }: any) => {
  const {
    selectedVideo,
    setPlayerScore,
    setSelectedVideo,
    playerScore,
    currentIndex,
    currentRound,
    setCurrentRound,
    nextVideoPair,
  } = useGamJamStore();

  const handleChoice = (side: "left" | "right") => {
    setSelectedVideo(side);
  };

  const handleSubmit = () => {
    if (selectedVideo === null) return;

    const isCorrect =
      selectedVideo === "left"
        ? data[currentIndex].statistics.viewCount >
          data[currentIndex + 1].statistics.viewCount
        : data[currentIndex + 1].statistics.viewCount >
          data[currentIndex].statistics.viewCount;

    console.log(isCorrect ? "Correct guess!" : "Incorrect guess.");
    setPlayerScore(isCorrect);

    if (currentRound < 10) {
      nextVideoPair();
      setCurrentRound(currentRound + 1);
    } else {
      console.log("Game Finished. Final Score:", playerScore);
      // Reset game logic or handle end game state
    }
  };
  let potentialScoreAmount = 10;

  return (
    <>
      <div
        style={{
          backgroundColor: "#BEB09B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            padding: "1.3rem 0",
          }}
        >
          <Image
            src="/images/youtubeIcon.svg"
            height={31}
            width={36}
            alt="youtube icon"
          />
          <p
            style={{ fontSize: "5.5rem", fontWeight: 700, lineHeight: "100%" }}
          >
            VS
          </p>

          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              style={{
                background: selectedVideo === "left" ? "lightgreen" : "gray",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleChoice("left")}
            >
              <Image
                src="/images/arrow.svg"
                height={42}
                width={42}
                alt="arrow"
              />
            </button>
            <button
              style={{
                background: selectedVideo === "right" ? "lightgreen" : "gray",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleChoice("right")}
            >
              <Image
                style={{ transform: "scaleX(-1)" }}
                src="/images/arrow.svg"
                height={42}
                width={42}
                alt="arrow"
              />
            </button>
          </div>

          <button
            style={{
              background: "gray",
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            style={{
              background: "gray",
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => console.log("change videos")}
          >
            Skip Video
          </button>
        </div>
        <div
          style={{
            borderTop: "2px solid white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 3rem",
          }}
        >
          <p style={{ marginBottom: "0.4rem" }}>Potential score</p>
          <p
            style={{
              fontSize: "2rem",
              background: "gray",
              marginBottom: "1rem",
              padding: "0.5rem",
            }}
          >
            {potentialScoreAmount}
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <p>Unlock</p>
            <Image src="/images/unlock.svg" height={14} width={16} alt="lock" />
          </div>
          <div style={{ display: "flex", gap: "3rem", marginBottom: "4rem" }}>
            <button
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "gray",
                border: "none",
                cursor: "pointer",
              }}
            >
              <p>Channel</p>
            </button>
            <button
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "gray",
                border: "none",
                cursor: "pointer",
              }}
            >
              <p>Description</p>
            </button>
          </div>
          <div style={{ display: "flex", gap: "3rem" }}>
            <button
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "gray",
                border: "none",
                cursor: "pointer",
              }}
            >
              <p>Thumbnail</p>
            </button>
            <button
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "gray",
                border: "none",
                cursor: "pointer",
              }}
            >
              <p>5s Video Preview</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentralUI;
