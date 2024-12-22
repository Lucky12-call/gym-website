import { useEffect, useState } from "react";
import NumberIncAnimation from "./NumberIncAnimation";
import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react";

const OurMission = () => {
  const [imageSrc, setImageSrc] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = {
    small:
      "https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png?scale-down-to=512", // Replace with your small image URL
    medium:
      "https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png?scale-down-to=1024", // Replace with your medium image URL
    large:
      "https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png", // Replace with your large image URL
  };

  useEffect(() => {
    const updateImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setImageSrc(images.large); // Large image for desktops
      } else if (screenWidth >= 768) {
        setImageSrc(images.medium); // Medium image for tablets
      } else {
        setImageSrc(images.small); // Small image for mobile devices
      }
    };

    updateImage(); // Set initial image
    window.addEventListener("resize", updateImage); // Update on resize

    return () => window.removeEventListener("resize", updateImage); // Cleanup
  }, [images]);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full md:w-[80%] md:mx-auto mb-28"
    >
      <h1 className="text-3xl md:text-7xl leading-tight text-[#ff3333] font-bold text-center uppercase mb-6">
        Your Fitness. <br />
        Our Mission.
      </h1>
      <p className="text-sm md:text-xl text-center text-gray-100 px-5 md:px-56">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </p>

      <div className="text-white flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-center mt-28">
        <div className="w-full md:w-96 px-5">
          <div className="flex justify-center items-center font-semibold text-[50px] mb-5">
            <NumberIncAnimation start={400} end={463} duration={1500} />
            K+
          </div>
          <p className="text-gray-500 text-center">
            Workouts logged and progress tracked every month
          </p>
        </div>

        <div className="w-full md:w-96 px-5 border-x border-gray-700">
          <div className="flex justify-center items-center font-semibold text-[50px] mb-5">
            <NumberIncAnimation start={100} end={163} duration={1500} />
            K+
          </div>
          <p className="text-gray-500 text-center">
            Fitness enthusiasts connected through our platform
          </p>
        </div>

        <div className="w-full md:w-96 px-5">
          <div className="flex justify-center items-center font-semibold text-[50px] mb-5">
            <NumberIncAnimation start={0} end={13} duration={1500} />+
          </div>
          <p className="text-gray-500 text-center">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0.2, rotateX: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        className="h-full md:h-[70vh] w-full md:w-[100%] flex justify-center items-center mt-16 relative"
      >
        <img
          src={imageSrc}
          alt="Responsive"
          decoding="async"
          loading="lazy"
          className="h-full w-full md:w-[65%] rounded-3xl object-center object-cover"
        />

        <div className="circle-button center-div">
          <FaPlay color="white" size={28} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurMission;
