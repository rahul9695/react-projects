import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [btnText, setBtnText] = useState("Run");
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (filled < 100 && isRunning)
      setTimeout(() => {
        setFilled((prev) => (prev += 2));
        setStatus("Loading...");
      }, 100);
    else if (filled > 0 && filled < 100 && !isRunning) setStatus("Paused");
    else if (filled > 99) setStatus("Completed");
  }, [isRunning, filled]);

  return (
    <>
      <div className="progressbar">
        <div
          className="progressTube"
          style={{
            width: `${filled}%`,
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <p className="barStatus">{status}</p>
      <div className="btnContainer">
        <button
          className="btnRun"
          onClick={() => {
            setIsRunning(!isRunning);
            if (btnText === "Run") setBtnText("Pause");
            else setBtnText("Run");
          }}
        >
          {btnText}
        </button>
        <button
          className="btnReset"
          onClick={() => {
            setIsRunning(false);
            setFilled(0);
            setStatus(null);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ProgressBar;
