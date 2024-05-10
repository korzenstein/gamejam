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
        }}
      >
        <h3>Which one has more views?</h3>
        <p
          style={{
            fontSize: "3rem",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {playerScore}
        </p>
        <p style={{ fontSize: "2rem" }}>TOTAL POINTS</p>
      </div>
    </>
  );
};

export default TopUI;
