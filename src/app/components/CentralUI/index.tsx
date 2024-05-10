import useGamJamStore from "@/app/store/gamJamStore";
import Image from "next/image";

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
                background: "gray",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setSelectedVideo("left")}
            >
              <Image
                src="/images/arrow.svg"
                height={42}
                width={42}
                alt="arrow"
              />
            </button>
            <button
              style={{ background: "gray", border: "none", cursor: "pointer" }}
              onClick={() => setSelectedVideo("right")}
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
