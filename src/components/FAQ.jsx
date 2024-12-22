import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { summaries } from "./summeryData";
import { motion } from "motion/react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-red-800 mt-20 overflow-hidden">
      {/* Background Images with Lower Z-Index */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="384"
        fill="none"
        className="absolute -top-20 right-16 max-md:hidden"
      >
        <path
          fill="#E9A5A5"
          fillRule="evenodd"
          d="M166.32.004c-2.519.031-5.037.062-7.556.072C109.006.191 62.238 19.31 26.33 54.024l-1.64 1.605c-.27.262-.543.52-.814.779-2.143 2.042-4.222 4.022-5.306 6.861-.105.847-.176 1.416-.123 1.973.107 1.14.73 2.232 2.627 5.558a362.43 362.43 0 0 1 2.634 4.527l1.42 2.481a1724.4 1724.4 0 0 1 8.851 15.463l1.9 3.358 1.876 3.27 1.752 3.093c1.96 3.434 3.421 6.353 3.809 10.324l-1.622 1.93C22.328 132.1 9.967 160.441 4.313 184.887a945.12 945.12 0 0 1-.996 4.429C.638 199.353.054 208.99.009 219.31l-.006 2.131c-.106 19.568 2.465 39.604 9.977 57.813l1.336 3.062c9.035 21.135 20.697 39.808 37.493 55.588l1.507 1.412c11.392 10.952 23.883 20.169 38.104 27.087l1.896.913c11.117 5.456 22.455 9.36 34.467 12.382l2.533.618c14.194 3.472 28.4 3.47 42.957 3.125 39.865-1.628 79.462-20.605 106.606-49.571l1.437-1.554c33.179-35.857 43-76.631 43-125h-93v-54h-31v139h31v-54h61l-.035.192c-1.156 6.355-2.218 12.199-4.019 18.327l-.759 2.481c-1.905 6.244-3.837 12.382-6.734 18.25l-1.453 2.75c-7.712 15.088-17.12 28.405-30.02 39.516l-2.98 2.484c-26.031 21.746-57.148 30.148-90.547 29.379-30.802-1.24-62.862-15.156-84.153-37.769l-2.3-2.61c-24.793-27.87-35.012-59.293-34.282-96.308 1.04-30.863 14.26-62.136 36.848-83.516l2.434-2.176c24.123-21.655 53.132-35.508 86.004-35.361 2.198.025 4.395.049 6.594.046 7.602-.023 14.998.048 22.442 1.805l1.96.51c22.853 5.191 47.117 16.58 63.273 34.02l1.727 1.98c13.783 15.332 25.294 32.501 31 52.5l2 7.5h32c0-25.414-19.057-56.057-35.625-74.25-1.001-.989-1.474-1.456-1.914-1.952-.395-.445-.763-.912-1.461-1.798-.907-2.377-1.168-3.536-.295-5.956l1.181-2.071 1.329-2.371 1.472-2.539a1219.69 1219.69 0 0 1 4.657-8.196l1.656-2.867 1.671-2.894 1.665-2.883c1.074-1.866 2.15-3.732 3.226-5.598 2.5-4.26 4.915-8.478 6.965-12.976.254-1.425.372-2.083.267-2.704-.089-.534-.343-1.04-.814-1.98l-1.98-1.965c-24.203-24.055-51.965-41.721-84.676-51.761l-3.074-.926C197.38 1.949 182.18-.101 166.32.004Zm91.871 83.187c2.937-4.854 5.592-9.359 7.125-14.875-59.589-44.909-150.865-55.944-209 0v3c1.076 1.615 2.143 3.239 3.145 4.901l1.237 2.111 1.348 2.295 1.395 2.38c1.33 2.267 2.66 4.533 3.988 6.8l.887 1.513a71.422 71.422 0 0 0 6.933-3.847c32.583-20.75 72.291-29.142 110.543-22.84l3.524.687c18.577 3.455 34.327 9.758 50.872 18.831 1.344.739 2.689 1.474 4.037 2.206 2.455 1.327 4.906 2.659 7.352 4.002l1.739.961c1.157-1.913 2.309-3.83 3.457-5.75l1.418-2.375Z"
          clipRule="evenodd"
        />
        <path fill="#E9A5A5" d="M151.316 176.316h30v93h-30v-93Z" />
        <path
          fill="#E9A5A5"
          d="M181.316 125.316c1 1 1 1 1.113 3.96l-.016 3.919-.004 2.081c-.006 2.201-.018 4.402-.031 6.603l-.014 4.467a4457.2 4457.2 0 0 1-.048 10.97 2854.08 2854.08 0 0 1-3.255-.466c-20.76-2.959-40.723-2.538-58.412 10.715-13.792 11.254-24.953 26.746-27.333 44.751-1.658 18.86 2.144 36.932 13.75 52.188 12.307 14.486 28.128 24.257 47.302 25.999 9.263.532 17.677-.76 26.948-2.187v32c-28.586 4.084-56.277-.176-79.901-17.384-22.682-17.51-34.922-41.179-39.697-69.112-1.208-10.521-.915-21.209 1.598-31.504l.742-3.441c6.143-26.069 23.187-47.331 45.508-61.746 21.101-12.502 47.666-18.374 71.75-11.813Z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="384"
        fill="none"
        className="absolute -left-2 -bottom-20 z-0 max-md:hidden"
      >
        <path
          width="800px"
          height="800px"
          fill="#E9A5A5"
          fillRule="evenodd"
          d="M166.32.004c-2.519.031-5.037.062-7.556.072C109.006.191 62.238 19.31 26.33 54.024l-1.64 1.605c-.27.262-.543.52-.814.779-2.143 2.042-4.222 4.022-5.306 6.861-.105.847-.176 1.416-.123 1.973.107 1.14.73 2.232 2.627 5.558a362.43 362.43 0 0 1 2.634 4.527l1.42 2.481a1724.4 1724.4 0 0 1 8.851 15.463l1.9 3.358 1.876 3.27 1.752 3.093c1.96 3.434 3.421 6.353 3.809 10.324l-1.622 1.93C22.328 132.1 9.967 160.441 4.313 184.887a945.12 945.12 0 0 1-.996 4.429C.638 199.353.054 208.99.009 219.31l-.006 2.131c-.106 19.568 2.465 39.604 9.977 57.813l1.336 3.062c9.035 21.135 20.697 39.808 37.493 55.588l1.507 1.412c11.392 10.952 23.883 20.169 38.104 27.087l1.896.913c11.117 5.456 22.455 9.36 34.467 12.382l2.533.618c14.194 3.472 28.4 3.47 42.957 3.125 39.865-1.628 79.462-20.605 106.606-49.571l1.437-1.554c33.179-35.857 43-76.631 43-125h-93v-54h-31v139h31v-54h61l-.035.192c-1.156 6.355-2.218 12.199-4.019 18.327l-.759 2.481c-1.905 6.244-3.837 12.382-6.734 18.25l-1.453 2.75c-7.712 15.088-17.12 28.405-30.02 39.516l-2.98 2.484c-26.031 21.746-57.148 30.148-90.547 29.379-30.802-1.24-62.862-15.156-84.153-37.769l-2.3-2.61c-24.793-27.87-35.012-59.293-34.282-96.308 1.04-30.863 14.26-62.136 36.848-83.516l2.434-2.176c24.123-21.655 53.132-35.508 86.004-35.361 2.198.025 4.395.049 6.594.046 7.602-.023 14.998.048 22.442 1.805l1.96.51c22.853 5.191 47.117 16.58 63.273 34.02l1.727 1.98c13.783 15.332 25.294 32.501 31 52.5l2 7.5h32c0-25.414-19.057-56.057-35.625-74.25-1.001-.989-1.474-1.456-1.914-1.952-.395-.445-.763-.912-1.461-1.798-.907-2.377-1.168-3.536-.295-5.956l1.181-2.071 1.329-2.371 1.472-2.539a1219.69 1219.69 0 0 1 4.657-8.196l1.656-2.867 1.671-2.894 1.665-2.883c1.074-1.866 2.15-3.732 3.226-5.598 2.5-4.26 4.915-8.478 6.965-12.976.254-1.425.372-2.083.267-2.704-.089-.534-.343-1.04-.814-1.98l-1.98-1.965c-24.203-24.055-51.965-41.721-84.676-51.761l-3.074-.926C197.38 1.949 182.18-.101 166.32.004Zm91.871 83.187c2.937-4.854 5.592-9.359 7.125-14.875-59.589-44.909-150.865-55.944-209 0v3c1.076 1.615 2.143 3.239 3.145 4.901l1.237 2.111 1.348 2.295 1.395 2.38c1.33 2.267 2.66 4.533 3.988 6.8l.887 1.513a71.422 71.422 0 0 0 6.933-3.847c32.583-20.75 72.291-29.142 110.543-22.84l3.524.687c18.577 3.455 34.327 9.758 50.872 18.831 1.344.739 2.689 1.474 4.037 2.206 2.455 1.327 4.906 2.659 7.352 4.002l1.739.961c1.157-1.913 2.309-3.83 3.457-5.75l1.418-2.375Z"
          clipRule="evenodd"
        />
        <path fill="#E9A5A5" d="M151.316 176.316h30v93h-30v-93Z" />
        <path
          fill="#E9A5A5"
          d="M181.316 125.316c1 1 1 1 1.113 3.96l-.016 3.919-.004 2.081c-.006 2.201-.018 4.402-.031 6.603l-.014 4.467a4457.2 4457.2 0 0 1-.048 10.97 2854.08 2854.08 0 0 1-3.255-.466c-20.76-2.959-40.723-2.538-58.412 10.715-13.792 11.254-24.953 26.746-27.333 44.751-1.658 18.86 2.144 36.932 13.75 52.188 12.307 14.486 28.128 24.257 47.302 25.999 9.263.532 17.677-.76 26.948-2.187v32c-28.586 4.084-56.277-.176-79.901-17.384-22.682-17.51-34.922-41.179-39.697-69.112-1.208-10.521-.915-21.209 1.598-31.504l.742-3.441c6.143-26.069 23.187-47.331 45.508-61.746 21.101-12.502 47.666-18.374 71.75-11.813Z"
        />
      </svg>

      {/* FAQ Section */}
      <div className="relative z-10">
        <motion.h1  initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold text-white text-center uppercase pt-20">
          frequently <br />
          asked questions
        </motion.h1>

        <motion.div  initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="max-w-3xl mx-auto p-6">
          {summaries.map((summary, index) => (
            <div
              key={index}
              className="border border-gray-300 p-5 mb-5 rounded-lg "
            >
              <div
                className="flex items-center gap-8 cursor-pointer"
                onClick={() => toggleDetails(index)}
              >
                <button className="text-gray-400 text-xl">
                  {openIndex === index ? (
                    <FaPlus className="rotate-45 transition-transform" />
                  ) : (
                    <FaPlus className="rotate-0 transition-transform" />
                  )}
                </button>
                <h2 className="text-sm font-semibold text-white">
                  {summary.title}
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-5 pt-10 pl-12 text-gray-300">
                  {summary.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
