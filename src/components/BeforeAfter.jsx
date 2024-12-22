import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { beforeAfterData } from "./beforeAfterData";
import RotateText from "./RotateText";
import "./sliderCss.css";
import { motion } from "motion/react";

const BeforeAfter = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full md:w-[95%] mx-auto my-20 "
    >
      <Slider {...settings}>
        {beforeAfterData.map((item) => (
          <div key={item.id} className="h-full md:h-screen w-full ">
            <h1 className="text-2xl md:text-4xl text-[#ff3333] font-semibold text-center uppercase mb-10">
              Transformations Made <br /> Possible with GymFluencer
            </h1>

            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center relative">
              {/* left section  */}
              <div className="w-full md:w-1/2 mt-20">
                <table className="text-2xl md:text-4xl font-bold text-gray-300  border-l-[6px] border-[#ff3333] pl-5 mb-20">
                  <tbody>
                    <tr>
                      <td className="text-gray-300 px-5">Name:</td>
                      <td className="text-white px-7">{item.userName}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 px-5">Age:</td>
                      <td className="text-white px-7">{item.age}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-auto w-[70%] border-collapse text-white ">
                  <tbody>
                    <tr className="border-b border-gray-400">
                      <td className=" p-6 pl-0 font-semibold">
                        <span className="border border-white p-3">
                          {item.weeks} Weeks
                        </span>
                      </td>
                      <td className="p-6 text-gray-300 font-semibold">
                        Before
                      </td>
                      <td className="p-6 text-gray-300 font-semibold">After</td>
                    </tr>

                    <tr>
                      <td className="text-gray-300 font-semibold p-6 pl-0">
                        Weight
                      </td>
                      <td className="text-gray-300 font-bold p-6">
                        <span className="text-3xl  text-white">
                          {item.weight.wBefore}
                        </span>
                        kg
                      </td>
                      <td className="text-gray-300 font-bold p-6">
                        <span className="text-3xl text-white">
                          {item.weight.wAfter}
                        </span>
                        kg
                      </td>
                    </tr>

                    <tr>
                      <td className="text-gray-300 font-semibold p-6  pt-4 pl-0">
                        Body fet
                      </td>
                      <td className="text-gray-300 font-bold p-6 pt-4">
                        <span className="text-3xl text-white">
                          {item.bodyFet.bBefore}
                        </span>
                        %
                      </td>
                      <td className="text-gray-300 font-bold p-6 pt-4">
                        <span className="text-3xl text-white">
                          {item.bodyFet.bAfter}
                        </span>
                        %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* right section  */}
              <div className="w-full md:w-1/2 mt-20 flex flex-col md:flex-row gap-7 items-center justify-end">
                <div className="h-[400px] w-72">
                  <img
                    src={item.userImgBefore}
                    alt={`user-${item.id}`}
                    className="w-full h-full"
                  />
                  <h2 className="text-2xl font-semibold text-[#ff3333] text-center uppercase mt-8">
                    Before
                  </h2>
                </div>

                <div className="h-[400px] w-72">
                  <img
                    src={item.userImgAfter}
                    alt={`user-${item.id}`}
                    className="w-full h-full"
                  />
                  <h2 className="text-2xl font-semibold text-[#ff3333] text-center uppercase mt-8">
                    After
                  </h2>
                </div>
              </div>
              {/* rotate text  */}
              <div className="absolute top-10 -right-10">
                <RotateText />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default BeforeAfter;
