import { useEffect, useRef, useState } from "react";
export const Timer = (): React.JSX.Element => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerRef = useRef(() => {});

  function callback() {
    setTime((prev) => prev + 1);
  }

  useEffect(() => {
    timerRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      timerRef.current();
    }

    if (isRunning) {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [isRunning]);

  const handleOnStart = () => {
    setIsRunning(true);
  };

  const handleOnPause = () => {
    setIsRunning(false);
  };

  const handleOnReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ marginBottom: "20px" }}>{time} seconds</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleOnStart} style={buttonStyle}>
          Start
        </button>
        <button onClick={handleOnPause} style={buttonStyle}>
          Pause
        </button>
        <button onClick={handleOnReset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
