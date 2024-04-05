import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Single from "./../../public/img/mentors/mentor.jpeg";
import Double from "./../../public/img/mentors/dean.jpeg";

const Mentor = () => {
  const ref = useRef(null);
  const mainControll = useAnimation();

  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      mainControll.start("visible");
    } else {
      mainControll.start("hidden");
    }
  }, [isInView]);
  return (
    <div className="destination my-16 mx-8 text-center md:my-16 md:mx-24 text-black">
      {/* <h1 className="font-bold text-5xl">Our Events</h1> */}
      <motion.h1
        ref={ref}
        className="relative text-center text-3xl font-semibold my-7 text-white"
        variants={{
          hidden: { opacity: 0.5, scale: 0.7 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        MENTORS
      </motion.h1>

      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          ref={ref}
          className="w-full bg-slate-600 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
          variants={{
            hidden: { opacity: 0.5, scale: 0.7 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={mainControll}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-full"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Sridhara H S
          </h2>
          <div className="text-center font-medium">
            <p className="  text-center py-2 border-b mx-8 mt-8 text-white">
              Robotics Lab Mentor
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full shadow-xl bg-slate-600 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300"
          variants={{
            hidden: { opacity: 0.5, scale: 0.7 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={mainControll}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-transparent rounded-full"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Dr. V Siddeswara Prasad
          </h2>
          <div className="text-center font-medium">
            <p className=" text-center py-2 border-b mx-8 mt-8 text-white">
              Robotics Lab Co-ordinator
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Mentor;
