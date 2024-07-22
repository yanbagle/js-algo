import "./styles.css";
import React, { useEffect } from "react";

// Loading Bar (0 - 100%)
// Pause
// Resume
// Reset

const _setTimeout = (callback, timeout) => {};
const _setInterval = (callback, timeout) => {};

export default function App() {
  const [percentage, setPercentage] = React.useState(0);
  const [pause, setPause] = React.useState(false);

  useEffect(() => {
    let id;
    if (!pause) {
      id = setInterval(() => {
        setPercentage((percentage) => {
          percentage++;
          if (percentage === 100) {
            clearInterval(id);
          }
          return percentage;
        });
      }, 100);
    }
    return () => {
      clearInterval(id);
    };
  }, [pause]);

  const pauseTimer = () => {
    setPause(true);
  };

  const resumeTimer = () => {
    setPause(false);
  };

  const reset = () => {
    setPercentage(0);
  };

  return (
    <div className="App">
      <div className="LoadingBar">
        <div className="LoadingBar" style={{ width: `${percentage}%` }}>
          {" "}
          {percentage}%{" "}
        </div>
      </div>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resumeTimer}>resume</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
