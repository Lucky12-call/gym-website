import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { beforeAfterData } from "./beforeAfterData";
import "./sliderCss.css";
import { motion } from "motion/react";

const BeforeAfter = () => {
  const settings = {
    slidesToShow: 1,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
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
      className="w-full max-w-full mx-auto my-20 overflow-hidden"
    >
      <Slider {...settings}>
        {beforeAfterData.map((item) => (
          <div key={item.id} className="h-full w-full">
            <h1 className="text-2xl md:text-4xl text-[#ff3333] font-semibold text-center uppercase mb-10">
              Transformations Made <br /> Possible with GymFluencer
            </h1>

            <div className="w-full max-w-full mx-auto flex flex-col md:flex-row justify-between items-center px-2 md:px-0">
              {/* left section */}
              <div className="w-full md:w-1/2 mt-10 md:mt-20">
                <table className="text-xl md:text-4xl font-bold text-gray-300 border-l-[6px] border-[#ff3333] pl-2 md:pl-5 mb-10 md:mb-20">
                  <tbody>
                    <tr>
                      <td className="text-gray-300 px-2 md:px-5">Name:</td>
                      <td className="text-white px-2 md:px-7">{item.userName}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 px-2 md:px-5">Age:</td>
                      <td className="text-white px-2 md:px-7">{item.age}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-auto w-full md:w-[70%] border-collapse text-white">
                  <tbody>
                    <tr className="border-b border-gray-400">
                      <td className="p-4 md:p-6 pl-0 font-semibold">
                        <span className="border border-white p-2 md:p-3">
                          {item.weeks} Weeks
                        </span>
                      </td>
                      <td className="p-4 md:p-6 text-gray-300 font-semibold">
                        Before
                      </td>
                      <td className="p-4 md:p-6 text-gray-300 font-semibold">
                        After
                      </td>
                    </tr>

                    <tr>
                      <td className="text-gray-300 font-semibold p-4 md:p-6 pl-0">
                        Weight
                      </td>
                      <td className="text-gray-300 font-bold p-4 md:p-6">
                        <span className="text-2xl md:text-3xl text-white">
                          {item.weight.wBefore}
                        </span>
                        kg
                      </td>
                      <td className="text-gray-300 font-bold p-4 md:p-6">
                        <span className="text-2xl md:text-3xl text-white">
                          {item.weight.wAfter}
                        </span>
                        kg
                      </td>
                    </tr>

                    <tr>
                      <td className="text-gray-300 font-semibold p-4 md:p-6 pl-0">
                        Body fat
                      </td>
                      <td className="text-gray-300 font-bold p-4 md:p-6">
                        <span className="text-2xl md:text-3xl text-white">
                          {item.bodyFet.bBefore}
                        </span>
                        %
                      </td>
                      <td className="text-gray-300 font-bold p-4 md:p-6">
                        <span className="text-2xl md:text-3xl text-white">
                          {item.bodyFet.bAfter}
                        </span>
                        %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* right section */}
              <div className="w-full md:w-1/2 mt-10 md:mt-20 flex flex-col md:flex-row gap-2 md:gap-7 items-center justify-end">
                <div className="h-[300px] md:h-[400px] w-full md:w-72">
                  <img
                    src={item.userImgBefore}
                    alt={`user-${item.id}`}
                    className="w-full h-full object-cover px-2 md:px-5"
                  />
                  <h2 className="text-xl md:text-2xl font-semibold text-[#ff3333] text-center uppercase mt-4 md:mt-8">
                    Before
                  </h2>
                </div>

                <div className="h-[300px] md:h-[400px] w-full md:w-72">
                  <img
                    src={item.userImgAfter}
                    alt={`user-${item.id}`}
                    className="w-full h-full object-cover px-2 md:px-5"
                  />
                  <h2 className="text-xl md:text-2xl font-semibold text-[#ff3333] text-center uppercase mt-4 md:mt-8">
                    After
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default BeforeAfter;