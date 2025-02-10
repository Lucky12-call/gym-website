import { FaRegStar } from "react-icons/fa";
import mobileImg from "../assets/mobile-img.png";

const OurBenefits = () => {
  return (
    <div className="w-full md:w-[87%] md:mx-auto my-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-40 flex justify-center items-center gap-5 rounded-full bg-zinc-800 text-white p-3 ">
          <FaRegStar />
          <span>Our Benefits</span>
        </div>

        <h1 className="text-3xl md:text-6xl font-semibold text-[#ff3333] text-center">
          Discover GymFluencer Benefits
        </h1>
        <p className=" text-gray-100 text-center">
          Unlock your full potential with GymFluencer your personal fitness{" "}
          <br className="max-md:hidden" />
          partner for progress and motivation
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        {/* left section */}
        <div className="">
          <div className="border border-gray-800 rounded-2xl w-full md:w-[400px] p-8 mb-5">
            <img
              src="https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg"
              alt="user-icon"
              className="p-3.5 rounded-2xl bg-zinc-800 mb-8"
            />
            <h1 className="text-xl text-[#ff3333] mb-2">
              Effortless Workout Logging
            </h1>
            <p className="text-gray-400 text-md font-medium">
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl w-full md:w-[400px] p-8">
            <img
              src="https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg"
              alt="rap-count-icon"
              className="p-3.5 rounded-2xl bg-zinc-800 mb-8"
            />
            <h1 className="text-xl text-[#ff3333] mb-2">
              Accurate Rep Counting
            </h1>
            <p className="text-gray-400 text-md font-medium">
              Count your reps accurately with our app, ensuring consistency and
              improved performance.
            </p>
          </div>
        </div>
        {/* mobile section  */}
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
            alt="mobile-body"
            className="w-[310px]"
          />
          <img
            src={mobileImg}
            alt=""
            className="w-[280px] rounded-[35px] absolute top-3 left-4"
          />
        </div>

        {/* right section */}
        <div className="">
          <div className="border border-gray-800 rounded-2xl w-full md:w-[400px] p-8 mb-5">
            <img
              src="https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg"
              alt="star-icon"
              className="p-3.5 rounded-2xl bg-zinc-800 mb-8"
            />
            <h1 className="text-xl text-[#ff3333] mb-2">
              Personalized Workout Plans
            </h1>
            <p className="text-gray-400 text-md font-medium">
              AI-powered workout plans tailored to your fitness level, goals,
              and progress.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl w-full md:w-[400px] p-8">
            <img
              src="https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg"
              alt="smile-icon"
              className="p-3.5 rounded-2xl bg-zinc-800 mb-8"
            />
            <h1 className="text-xl text-[#ff3333] mb-2">
              Calorie Calculation & Personalized Diet Plans
            </h1>
            <p className="text-gray-400 text-md font-medium">
              Calculate calories burned during workouts and AI-customized meal
              plans for optimal nutrition and wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
