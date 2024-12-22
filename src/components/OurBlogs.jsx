import { IoCalendarClearOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const OurBlogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-24 w-full md:w-[90%] mx-auto z-10 px-5 md:px-0"
    >
      <h1 className="text-3xl md:text-[40px] text-[#ff3333] font-semibold uppercase text-center mb-12">
        our latest blogs
      </h1>

      <div className="h-full md:h-[80vh] w-full flex flex-col md:flex-row gap-10 rounded-3xl">
        {/* Left Section */}
        <div className="h-full w-full md:w-[65%] rounded-3xl text-white relative overflow-hidden group">
          <img
            src="https://framerusercontent.com/images/Ak1npcHaOL6HZDqt4s8onDlRbY.jpg?scale-down-to=1024"
            alt=""
            className="h-full w-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 px-6 py-8 bg-gradient-to-t from-[rgba(0,0,0,5)] to-[rgba(0,0,0,0.1)] rounded-b-3xl">
            <button className="px-1.5 md:px-3 py-0.5 md:py-1 bg-[#ff3333] font-semibold rounded-sm">
              Exercise
            </button>
            <h1 className="text-sm md:text-[28px] mt-2 uppercase font-bold">
              Conquering Consistency: How to Make Exercise a Habit You Love
            </h1>
            <p className="flex items-center gap-1 text-gray-300">
              <IoCalendarClearOutline size={22} />
              <span className="text-sm mt-1">Jun 28, 2024 | Benjamin</span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-full w-full md:w-[35%] rounded-3xl flex flex-col gap-9">
          {[
            {
              imgSrc:
                "https://framerusercontent.com/images/eZhVZiqwYqckpfqk8iVFqSYsQk.jpg?scale-down-to=512",
              category: "Weight loss",
              title: "Weight Loss: A Sustainable Approach for a Healthier You",
              date: "Jun 26, 2024",
              author: "Jessica",
              color: "#dc7028",
            },
            {
              imgSrc:
                "https://framerusercontent.com/images/vC9giEjmPcdMUbgxGuPwaw1fJg.jpg?scale-down-to=512",
              category: "Exercise",
              title: "Conquering Consistency: How to Make Exercise a Habit You Love",
              date: "Jun 23, 2024",
              author: "David",
              color: "#1dae30",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="h-[47%] w-full relative text-white rounded-3xl overflow-hidden group"
            >
              <img
                src={blog.imgSrc}
                alt=""
                className="h-full w-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 px-4 py-5 bg-gradient-to-t from-[rgba(0,0,0,5)] to-[rgba(0,0,0,0.1)] rounded-3xl">
                <button
                  className={`px-1.5 md:px-3 py-0.5 md:py-1 font-semibold text-sm rounded-sm`}
                  style={{ backgroundColor: blog.color }}
                >
                  {blog.category}
                </button>
                <h1 className="text-sm md:text-lg mt-2 uppercase font-bold">
                  {blog.title}
                </h1>
                <p className="flex items-center gap-1 text-gray-300">
                  <IoCalendarClearOutline size={22} />
                  <span className="text-sm mt-1">
                    {blog.date} | {blog.author}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurBlogs;
