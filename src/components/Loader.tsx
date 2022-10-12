import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  const style: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <PacmanLoader
      color="#1349D3"
      loading={loading}
      size={25}
      cssOverride={style}
      aria-label="Lunar 🌙"
      data-testid="loader"
    />
  );
}

export default Loader;
