import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Mentor from "./Mentor";
import Single from "./../../public/img/Alumini/team1a.jpg";
import Double from "./../../public/img/Alumini/team1b.jpg";
import Triple from "./../../public/img/Alumini/team1c.jpg";
import groupImg from "../../public/img/Group_img/group.jpeg";
const About = () => {
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
    <div className="w-full bg-slate-900 pt-32 pb-1 px-4">
      <motion.h1
        className="relative text-center text-3xl font-bold my-3 text-white"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          type: "spring",
          stiffness: 80,
        }}
      >
        ABOUT US
      </motion.h1>
      <div className=" max-w-full py-10  mx-auto grid gap-6 md:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: "-100vw", scale: 0.9 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            type: "spring",
            stiffness: 30,
          }}
          whileHover={{ scale: 1 }}
        >
          <img src={groupImg} alt="" className="border-4 rounded-sm" />
        </motion.div>

        <div className="sm:flex flex-col justify-center ">
          <div className="flex flex-col justify-center">
            <div className="flex  ">
              <motion.p
                className="py-2 text-white text-justify font-lg font-semibold"
                initial={{ x: "100vw", scale: 0.95 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 30,
                }}
                whileHover={{ scale: 1 }}
              >
                CORSIT, the robotics club of SIT, is a community of like-minded
                individuals who share a passion for robotics and come together
                to learn, build, and have fun with robots. Established in 2006,
                CORSIT has organized national-level workshops and actively
                participated in various national-level events. The club's
                mission is to empower students by providing hands-on
                opportunities to learn about robotics through practical
                experience. As the official body overseeing all robotics
                activities at SIT, CORSIT aims to foster a culture of creativity
                and innovation in the field of robotics.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <Mentor />
      <motion.h1
        ref={ref}
        className="relative text-center text-3xl font-semibold my-7 text-white"
        variants={{
          hidden: { opacity: 0.5, scale: 0.7 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        FOUNDERS
      </motion.h1>

      <motion.div
        ref={ref}
        className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0.5, scale: 0.7 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-full bg-slate-600 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-full"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Kiran B K
          </h2>
          <div className="text-center font-medium">
            <p className="  text-center py-2 border-b mx-8 mt-8 text-white">
              Product Owner at Bosch Global Software{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-slate-600 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-transparent rounded-full"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Shivaswaroop P
          </h2>
          <div className="text-center font-medium">
            <p className=" text-center py-2 border-b mx-8 mt-8 text-white">
              Procurement Specialist at ZF Group{" "}
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-600 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" mx-auto mt-[-3rem] bg-white rounded-full h-24 w-24"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Divyanshu Sahay
          </h2>
          <div className="text-center font-medium">
            <p className="   text-center py-2 border-b mx-8 mt-8 text-white">
              Firmware Engineer at Intel Corporation{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
