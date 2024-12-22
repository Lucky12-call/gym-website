import logo_1 from "../assets/logo-1.svg";

const RotateText = () => {
  return (
    <div className="relative h-24 w-24 flex justify-center items-center">
      {/* Centered Image */}
      <img src={logo_1} alt="User" className="h-12 w-12 absolute z-10" />

      {/* Rotating Text */}
      <div className="h-32 w-32 flex justify-center items-center spin-ani">
        <svg
          className="h-full w-full"
          viewBox="0 0 120 120" // Adjusted viewBox to provide more space
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Path */}
          <path
            id="text-path"
            d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            fill="transparent"
          />

          {/* Rotating Text */}
          <text>
            <textPath
              href="#text-path"
              startOffset="0"
              style={{
                letterSpacing: "0.1em",
                fontSize: "12px", // Reduced font size to prevent cutting
                fontWeight: "700",
                fill: "rgb(255, 255, 255)",
              }}
            >
              · BUILT · TRAINED & POWERED · GYMFLUENCER
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RotateText;
