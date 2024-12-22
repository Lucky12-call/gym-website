// import { useState, useEffect } from "react";

// const VC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const items = [
//     "https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png",
//     "https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png",
//     "https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png",
//   ];

//   // Automatically update index for top-to-bottom motion
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, 2000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [items.length]);

//   // Calculate positions for top-to-bottom carousel
//   const getPosition = (index) => {
//     const total = items.length;
//     const offset = (index - currentIndex + total) % total;

//     if (offset === 0) return "translate-y-0 z-10 opacity-100";
//     if (offset === 1) return "-translate-y-full z-0 opacity-50";
//     if (offset === 2) return "translate-y-[200%] z-0 opacity-30";
//     if (offset === total - 1) return "-translate-y-full z-0 opacity-50";
//     return "hidden";
//   };

//   return (
//     <div className="relative h-[400px] w-[600px] overflow-hidden flex items-center justify-center">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className={`absolute transition-all duration-500 ease-in-out ${getPosition(
//             index
//           )}`}
//         >
//           <img
//             src={item}
//             alt={`Slide ${index + 1}`}
//             className="h-[400px] w-[600px] object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VC;

import { useState, useEffect } from "react";

const VC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png",
    "https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png",
    "https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png",
  ];

  // Automatically update index for top-to-bottom motion
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  // Calculate positions for top-to-bottom carousel
  const getPosition = (index) => {
    const total = items.length;
    const offset = (index - currentIndex + total) % total;

    if (offset === 0) return "translate-y-0 z-10 opacity-100";
    if (offset === 1) return "-translate-y-full z-0 opacity-30";
    if (offset === 2) return "translate-y-[200%] z-0 opacity-30";
    if (offset === total - 1) return "translate-y-full z-0 opacity-50";
    return "hidden";
  };

  return (
    <div className="relative h-full md:h-[500px] w-full md:w-[600px] overflow-hidden flex items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-500 ease-in-out ${getPosition(
            index
          )}`}
        >
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            className="h-full md:h-[350px] w-full md:w-[600px] object-none object-left-top shadow-lg"
            height={200}
            width={300}
          />
        </div>
      ))}
    </div>
  );
};

export default VC;
