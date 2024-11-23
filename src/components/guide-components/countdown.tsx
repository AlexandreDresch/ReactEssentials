import { useState, useEffect } from "react";

const Countdown = () => {
  // State to store the remaining time and whether the timer is running
  const [timeLeft, setTimeLeft] = useState(0); // Time remaining in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer running state
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Interval ID for the timer

  // Function to start the timer
  const startTimer = (seconds: number) => {
    setTimeLeft(seconds); // Set the time to the user-defined value
    setIsRunning(true); // Start the timer

    // Set an interval to decrease the time every second
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id); // Stop the timer when it reaches 0
          alert("Time's up!"); // Show an alert when the timer ends
          return 0;
        }
        return prevTime - 1; // Decrease the time by 1 second
      });
    }, 1000);

    setIntervalId(id); // Store the interval ID
  };

  // Function to pause the timer
  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval to pause the timer
      setIsRunning(false); // Set the timer state to paused
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
    }
    setIsRunning(false); // Stop the timer
    setTimeLeft(0); // Reset the time to 0
  };

  // Effect to handle cleanup when the component is unmounted
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Clear the interval on cleanup
      }
    };
  }, [intervalId]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer</h1>
      <div>
        <input
          type="number"
          placeholder="Enter seconds"
          onChange={(e) => setTimeLeft(Number(e.target.value))}
          value={timeLeft}
        />
        <div style={{ display: "flex", gap: "4px", alignItems: "center", width: "100%", justifyContent: "center" }}>
          <button onClick={() => startTimer(timeLeft)} disabled={isRunning}>
            Start
          </button>
          <button onClick={pauseTimer} disabled={!isRunning}>
            Pause
          </button>
          <button onClick={resetTimer} disabled={isRunning}>
            Reset
          </button>
        </div>
      </div>
      <h2>{timeLeft} seconds remaining</h2>
    </div>
  );
};

export default Countdown;
