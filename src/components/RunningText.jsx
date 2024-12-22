import ReactFastMarquee from "react-fast-marquee";

const RunningText = () => {
  return (
    <div className="my-32">
      <ReactFastMarquee speed={100} className="text-white text-7xl side-scroll">
        Fitness / Transformation / Motivation / Progress / Fitness /
        Transformation / Motivation / Progress / Fitness / Transformation /
        Motivation / Progress / Fitness / Transformation / Motivation / Progress
        /{" "}
      </ReactFastMarquee>

      <ReactFastMarquee
        direction="right"
        speed={100}
        className=" text-[#ff3333] text-7xl opacity-50 side-scroll"
      >
        Progress / Work / Community / Strength / Progress / Work / Community /
        Strength / Progress / Work / Community / Strength / Progress / Work /
        Community / Strength /{" "}
      </ReactFastMarquee>
    </div>
  );
};

export default RunningText;
