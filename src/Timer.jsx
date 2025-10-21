import React, { useState, useEffect } from "react";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState([]);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10); // update every 10ms for smooth milliseconds
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, startTime]);

  const handleClick = () => {
    if (!running) {
      // Start timer
      setStartTime(Date.now() - elapsedTime);
      setRunning(true);
    } else {
      // Save current time
      setSavedTimes((prev) => [...prev, elapsedTime]);
    }

    // Stop after 3 clicks (3 saved times)
    if (savedTimes.length >= 2) {
      setRunning(false);
    }
  };

  // Function to calculate time differences
  const getTimeDifferences = () => {
    let diffs = [];
    for (let i = 1; i < savedTimes.length; i++) {
      diffs.push(savedTimes[i] - savedTimes[i - 1]);
    }
    return diffs;
  };

  const differences = getTimeDifferences();

  // Format milliseconds to mm:ss:ms
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10); // two-digit milliseconds
    return `${minutes}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      onClick={handleClick}
      className="flex border flex-col items-center justify-center h-screen cursor-pointer select-none"
    >
      <h1 className="text-4xl font-bold mb-4">Timer</h1>
      <p className="text-2xl">{formatTime(elapsedTime)}</p>

      {savedTimes.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Saved Times:</h2>
          <ul>
            {savedTimes.map((time, index) => (
              <li key={index}>
                {formatTime(time)}
                {index > 0 && (
                  <span className="ml-4 text-gray-500">
                    (+{formatTime(differences[index - 1])})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Timer;
