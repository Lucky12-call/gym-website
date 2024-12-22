import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const NumberIncAnimation = ({ start = 0, end = 100, duration = 2000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration / 100); // Calculate increment per update
    let currentNumber = start;

    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= end) {
        currentNumber = end; // Ensure we don't exceed the end value
        clearInterval(interval);
      }
      setCount(Math.round(currentNumber)); // Update state with the rounded value
    }, 100);

    return () => clearInterval(interval); // Cleanup interval
  }, [start, end, duration]);

  return (
    <div>
      {count.toLocaleString()} {/* Format number with commas */}
    </div>
  );
};

export default NumberIncAnimation;
