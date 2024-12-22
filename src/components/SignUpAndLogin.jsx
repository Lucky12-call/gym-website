import { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from "../context/AppContext";

const SignUpAndLogin = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={`fixed h-${
        state == "Login" ? "[500px]" : "[600px]"
      } top-10 left-0 right-0 bottom-0 z-20 flex justify-center`}
    >
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-zinc-950 p-10 rounded-xl text-white"
      >
        <h1 className="text-center text-3xl font-semibold text-red-600">
          {state}
        </h1>

        {state !== "Login" && (
          <div className="flex flex-col mb-5 text-white">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="kindly enter your name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="outline-none text-sm w-96 border rounded-md mt-2 px-6 py-3 bg-transparent"
            />
          </div>
        )}

        <div className="flex flex-col mb-5 text-white">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            placeholder="kindly enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-sm w-96 border rounded-md mt-2 px-6 py-3 bg-transparent"
          />
        </div>

        <div className="flex flex-col mb-5 text-white">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="kindly enter your name here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none text-sm w-96 border rounded-md mt-2 px-6 py-3 bg-transparent"
          />
        </div>

        <div className="flex flex-col mb-5 text-white">
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            placeholder="kindly enter your name here"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="outline-none text-sm w-96 border rounded-md mt-2 px-6 py-3 bg-transparent"
          />
        </div>

        <button className="bg-red-600 text-black w-full p-2 rounded-full text-xl">
          Confirm
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center text-gray-400 ">
            {"Don't"} have an account?{" "}
            <span
              onClick={() => setState("Sign up")}
              className="text-white cursor-pointer"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-gray-400 ">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-white cursor-pointer"
            >
              Login
            </span>
          </p>
        )}

        <RxCross2
          size={24}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </div>
  );
};

export default SignUpAndLogin;
