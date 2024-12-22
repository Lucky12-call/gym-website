import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      src: "https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=512",
      size: "small",
    },
    {
      src: "https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=1024",
      size: "medium",
    },
    {
      src: "https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=2048",
      size: "large",
    },
  ];

  const selectedImage =
    windowWidth > 1024 ? images[2] : windowWidth > 768 ? images[1] : images[0];

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative h-screen w-full flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 md:pt-16`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${selectedImage.src})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 text-center">
        <div className="w-80 h-10 p-2 bg-zinc-900 rounded-full flex items-center justify-between px-4">
          <div className="relative w-1/4 h-full text-center">
            <img
              src="https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png"
              alt="user-img-1"
              className="h-7 absolute left-0 top-0"
            />
            <img
              src="https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png"
              alt="user-img-3"
              className="h-7 absolute left-5 top-0"
            />
            <img
              src="https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png"
              alt="user-img-3"
              className="h-7 absolute left-10 top-0"
            />
          </div>
          <h1 className="text-white font-semibold text-sm sm:text-base w-3/4">
            Trusted by 3+ million users
          </h1>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          className="text-6xl md:text-8xl text-[#ff3333] font-bold leading-tight"
        >
          Track Your Fitness <br /> Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, <br className="min-sm:hidden" /> count reps, and
          track calories burned. Stay motivated and achieve your goals with
          ease.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Home;
