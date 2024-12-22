import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8 mt-20">
        <img
          src="logo.svg"
          alt="footer-logo"
          className="h-12 md:h-14 w-44 md:w-52"
        />
        <h2 className="text-lg md:text-2xl text-gray-300 text-center">
          Where Fitness Meets Social
          <br /> Connection!
        </h2>

        <button className="flex justify-center items-center gap-2 px-2 md:px-4 py-1.5 md:py-3 text-sm md:text-base rounded-lg text-white bg-zinc-900 font-semibold text-center">
          {" "}
          <MdMailOutline size={24} />
          hello@gym.birlaventures.com
        </button>

        <ul className="flex flex-wrap justify-center items-center gap-5 text-gray-300 mt-5">
          <li className="hover:text-white transition-colors duration-500 text-md md:text-xl cursor-pointer">
            Home
          </li>
          <li className="hover:text-white transition-colors duration-500 text-md md:text-xl  cursor-pointer">
            Workout Plan
          </li>
          <li className="hover:text-white transition-colors duration-500 text-md md:text-xl  cursor-pointer">
            Diet Plan
          </li>
          <li className="hover:text-white transition-colors duration-500 text-md md:text-xl  cursor-pointer">
            {"FAQ's"}
          </li>
        </ul>
      </div>

      <div className="h-14 w-full flex flex-col-reverse md:flex-row gap-5 justify-between items-center py-5 md:py-16 px-5 md:px-24 mt-10">
        <p className="text-gray-400 text-sm md:text-xl text-center">
          © 2024 GymFluencer. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-8 text-lg md:text-2xl text-white">
          <FaLinkedin />
          <FaXTwitter />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
