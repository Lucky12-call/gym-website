import ReactFastMarquee from "react-fast-marquee";
import { reviewUserData } from "./reviewUserData";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from "motion/react";

const Review = () => {
  return (
    <div className="w-full h-[100dvh] md:h-[70vh] relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 review-bg-img z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 pt-20"
      >
        <h1 className="opacity-100 text-4xl text-white font-bold uppercase text-center mb-10">
          What people say
        </h1>

        {/* Adjust marquee speed based on hover */}
        <ReactFastMarquee speed={70} className="h-full md:h-80 w-full">
          {reviewUserData.map((user) => (
            <div
              key={user.id}
              className="h-[100vh] md:h-72 max-w-72 md:max-w-[700px]  rounded-3xl relative flex flex-col md:flex-row md:bg-zinc-950 mx-3 my-5"
            >
              {/* Quote Icon */}
              <div className="absolute bottom-0 md:-bottom-3 right-0 md:right-10 z-0">
                <FaQuoteLeft
                  color="#2C250C"
                  className="text-96 md:text-[250px]"
                />
              </div>

              <div className="flex flex-col md:flex-row w-full h-full max-md:bg-gray-950">

              {/* Left Section: User Image */}
              <img
                src={user.userImg}
                alt={`user-${user.id}`}
                className="h-[30%] md:h-full w-full md:w-[35%] rounded-tl-3xl rounded-bl-3xl"
              />

              {/* Right Section: Content */}
              <div className="p-7 z-10 w-full md:w-[65%]">
                {/* Stars */}
                <div className="flex items-center gap-2 text-red-600 text-3xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Text Content */}
                <div className="h-[90%] pt-7 flex flex-col justify-between">
                  <p className="text-white text-md mb-5">{user.dis}</p>
                  <div>
                    <p className="text-white text-md">{user.userName}</p>
                    <p className="text-gray-400 text-md flex items-center gap-1">
                      <MdOutlineHorizontalRule size={32} />
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
              </div>

            </div>
          ))}
        </ReactFastMarquee>
      </motion.div>
    </div>
  );
};

export default Review;
