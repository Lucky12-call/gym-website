import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import SignUpAndLogin from "./SignUpAndLogin";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const { showLogin, setShowLogin } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full md:w-[75%] mx-auto">
      {showLogin && <SignUpAndLogin />}

      <div className="w-full bg-zinc-900 px-4 sm:px-7 py-3 rounded-full flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-8 sm:h-10" />

        {/* Hamburger Menu Icon */}
        <HiMiniBars3BottomRight
          className="block sm:hidden text-2xl text-gray-300 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex gap-6 md:gap-10 text-gray-300 text-sm sm:text-xl absolute sm:static bg-zinc-900 sm:bg-transparent top-full left-0 w-full sm:w-auto py-4 sm:py-0 rounded-lg sm:rounded-none shadow-lg sm:shadow-none`}
        >
          <li className="hover:text-red-600 transition-colors duration-500 cursor-pointer text-center">
            Home
          </li>
          <li className="hover:text-red-600 transition-colors duration-500 cursor-pointer text-center">
            About
          </li>
          <div className="relative group hover:text-red-600 transition-colors duration-500 cursor-pointer text-center">
            <ul>
              <li className="flex gap-1 justify-center items-center">
                Our Services <MdKeyboardArrowDown />
              </li>
            </ul>
            <div className="absolute hidden w-[200px] group-hover:block top-0 left-0 z-10 rounded pt-12">
              <ul className="list-none m-0 p-5 w-full rounded-2xl text-sm bg-zinc-900 text-gray-300">
                <li className="text-base sm:text-xl cursor-pointer mb-2">
                  Workout Plan
                </li>
                <li className="text-base sm:text-xl cursor-pointer">
                  Diet Plan
                </li>
              </ul>
            </div>
          </div>
          <li className="hover:text-red-600 transition-colors duration-500 cursor-pointer text-center">
            Benefits
          </li>
          <li className="hover:text-red-600 transition-colors duration-500 cursor-pointer text-center">
            Blogs
          </li>
          <li className="hover:text-red-600 transition-colors duration-500 cursor-pointer text-center">
            Contact
          </li>
        </ul>

        {/* Join Us Button */}
        <button
          onClick={() => setShowLogin(true)}
          className="hidden sm:block px-4 md:px-8 py-2 md:py-3 bg-[#ff3333] rounded-full text-sm md:text-xl text-white font-semibold"
        >
          Join Us Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
