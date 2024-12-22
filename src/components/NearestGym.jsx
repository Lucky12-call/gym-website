import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { cardData } from "./mapCardData";
import { useState } from "react";
import { motion } from "motion/react";

const googleMap = [
  {
    id: 1,
    add: "500 W 33rd St, New York, NY 10001, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.370096895797!2d-74.00257952422821!3d40.75388403505086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b3932f35e9%3A0xd83b9557b294445b!2s500%20W%2033rd%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1734799847667!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 2,
    add: "360 Hampton Dr, Venice, CA 90291, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8899908492326!2d-118.47776792452858!3d33.995359320732256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bacf5bafe507%3A0x1feecab4aee51758!2s360%20Hampton%20Dr%2C%20Venice%2C%20CA%2090291%2C%20USA!5e0!3m2!1sen!2sin!4v1734800011022!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 3,
    add: "500 N Kingsbury St, Chicago, IL 60654, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1274265051948!2d-87.64180412417267!3d41.890116564662065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cc9f1677573%3A0x202bb238e62b85a6!2s500%20N%20Kingsbury%20St%2C%20Chicago%2C%20IL%2060654%2C%20USA!5e0!3m2!1sen!2sin!4v1734800060742!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 4,
    add: "1001 Brannan St, San Francisco, CA 94103, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.872157425826!2d-122.40956982436725!3d37.76959571245874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2c272c24ad%3A0xcdb85f7bf00e0491!2s1001%20Brannan%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1734800113769!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 5,
    add: "2020 Western Ave, Seattle, WA 98121, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.7885095895194!2d-122.34640092387252!3d47.610801887687785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154d37ae1b21%3A0x3745f4673d4fcc66!2s2020%20Western%20Ave%2C%20Seattle%2C%20WA%2098121%2C%20USA!5e0!3m2!1sen!2sin!4v1734800161644!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 6,
    add: "7980 W Sahara Ave, Las Vegas, NV 89117, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.9074890591273!2d-115.26779832443874!3d36.14446570438894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c095db5658ab%3A0x98379767c386bdb8!2s7980%20W%20Sahara%20Ave%2C%20Las%20Vegas%2C%20NV%2089117%2C%20USA!5e0!3m2!1sen!2sin!4v1734800215170!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 7,
    add: "1220 20th St, Miami Beach, FL 33139, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.250876480337!2d-80.14448102482051!3d25.795296207216634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b480b93dd891%3A0x252c1fd97b9d27bd!2s1220%2020th%20St%2C%20Miami%20Beach%2C%20FL%2033139%2C%20USA!5e0!3m2!1sen!2sin!4v1734800259486!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 8,
    add: "131 Dartmouth St, Boston, MA 02116, USA",
    loc: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.787893430465!2d-71.07793312414991!3d42.34704533592414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0d3fe6c54b%3A0x2fdf0b22436567c4!2s131%20Dartmouth%20St%2C%20Boston%2C%20MA%2002116%2C%20USA!5e0!3m2!1sen!2sin!4v1734800313995!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];

const NearestGym = () => {
  const [address, setAddress] = useState(
    "500 W 33rd St, New York, NY 10001, USA"
  );

  const res = googleMap.filter((googleAdd) => googleAdd.add === address);
  console.log(res);

  console.log(address);
  return (
    <div className="w-[87%] mx-auto mt-10">
      <div className="">
        <h1 className="text-3xl text-[#ff3333] uppercase text-center font-semibold">
          Find Your Nearest Gym
        </h1>
        <p className="text-gray-200 text-lg text-center mt-4">
          Easily discover gyms near your location to kickstart <br /> your
          fitness journey today!
        </p>
      </div>

      <div className="w-full h-[85vh] flex flex-col-reverse md:flex-row justify-between items-center mt-10">
        {/* left section  */}
        <motion.div
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 max-h-full overflow-y-scroll"
        >
          {/* location card  */}
          {cardData.map((card) => (
            <div
              key={card.id}
              onClick={() => setAddress(card.address)}
              className={`w-full h-36 md:h-44 rounded-2xl flex overflow-hidden group ${
                card.address === address ? "bg-[#ff3333]" : "bg-[#1f1f1f]"
              } cursor-pointer mb-5`}
            >
              <div className="h-full w-[30%] overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                <img
                  src={card.imgSrc}
                  alt={`${card.city} gym`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-2 md:px-4 py-4 md:py-8">
                <h1 className="text-lg md:text-2xl font-semibold text-white mb-4">
                  {card.city}
                </h1>
                <p className="text-gray-300 text-sm md:text-base flex items-center gap-2 mb-2">
                  <FiPhoneCall />
                  {card.phone}
                </p>
                <p className="text-gray-300 text-sm md:text-base flex items-center gap-2">
                  <IoLocationOutline />
                  {card.address}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        {/* map  */}
        <motion.div
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-full"
        >
          {res[0].loc}
        </motion.div>
      </div>
    </div>
  );
};

export default NearestGym;
