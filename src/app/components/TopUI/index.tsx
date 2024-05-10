import useGamJamStore from "@/app/store/gamJamStore";

const TopUI = () => {
  const { playerScore } = useGamJamStore();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "3rem 5rem",
          position: "relative",
          borderBottom: "2px solid white",
          backgroundColor: "#BEB09B",
        }}
      >
        <h3 style={{ fontSize: "2rem" }}>Which one has more views?</h3>
        <p
          style={{
            fontSize: "3rem",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: 700,
          }}
        >
          {playerScore}
        </p>
        <p style={{ fontSize: "2.2rem", fontWeight: 700 }}>Total Points</p>
      </div>
    </>
  );
};

export default TopUI;
