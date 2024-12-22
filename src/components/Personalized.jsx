import ReactFastMarquee from "react-fast-marquee";
import VC from "./VC";
import { motion } from "motion/react";

const Personalized = () => {
  return (
    <div className="my-20">
      <div className="w-full h-full md:w-[87%] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* left section  */}
        <motion.div
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h1 className="w-full text-3xl md:text-[40px] leading-tight text-[#ff3333] font-semibold uppercase text-center md:text-start mb-10">
            Your <br className="max-md:hidden" /> Personalized{" "}
            <br className="max-md:hidden" /> Fitness Hub
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-0">
            <div className="w-full flex flex-col justify-center items-center gap-12 text-gray-200 pr-0 md:pr-60">
              <p className="text-center md:text-start">
                Personalized workout routines tailored to your goals and
                preferences
              </p>
              <p className="text-center md:text-start">
                Get expert guidance with virtual coaching sessions, available
                anytime, anywhere.
              </p>
              <p className="text-center md:text-start">
                Track your fitness journey with detailed analytics, goal
                setting, and achievements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* right section  */}
        <motion.div
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <VC />
        </motion.div>
      </div>

      <ReactFastMarquee
        className="bg-[#fc2929] text-white py-3 mt-20"
        speed={100}
      >
        <p className="text-xs uppercase">
          Progress Tracking Fitness Plans · Workout Routines · Progress Tracking
          Fitness Plans · Workout Routines · Progress Tracking Fitness Plans ·
          Workout Routines · Progress Tracking Fitness Plans · Workout Routines
          · Progress Tracking Fitness Plans · Workout Routines · Progress
          Tracking Fitness Plans · Workout Routines ·
        </p>
      </ReactFastMarquee>
    </div>
  );
};

export default Personalized;
