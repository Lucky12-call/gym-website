import { imageData } from "./serviceImageData";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-[40px] font-semibold text-[#ff3333] text-center uppercase mb-5">
        Our services
      </h1>
      <p className="text-white text-sm md:text-xl text-center ">
        GymFluencer offers 5 essential services to help you <br /> achieve your
        fitness goals with ease and flexibility.
      </p>

      <div className="flex flex-col md:flex-row items-center mt-24 gap-5">
        {imageData.map((user) => (
          <div
            key={user.id}
            className="h-60 md:h-[600px] w-full md:w-96 relative overflow-hidden group"
          >
            <img
              src={user.userImg}
              alt={`image-${user.id}`}
              className="h-full w-full opacity-40 transition-transform duration-500 group-hover:scale-110"
            />
            <h2 className="text-xl md:text-3xl font-bold text-white text-center uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {user.title}
            </h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
