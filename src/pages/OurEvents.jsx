import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
function OurEvents() {
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
    <div className="bg-slate-950">
      <div className="destination my-16 mx-8 text-center md:my-16 md:mx-24 text-black">
        <motion.h1 className="font-bold text-5xl">Our Events</motion.h1>
        <motion.p className="mt-1">
          Our club organize several events throughout the year.
        </motion.p>

        <div className="flex flex-col-reverse mt-10  first-des md:flex-row md:items-center md:justify-between md:mt-[4.5rem] ">
          <motion.div className=" w-full md:w-[45%] text-lg text-start">
            <h2 className="font-semibold pb-4">RoboExpo</h2>
            <p>
              ROBOEXPO is an annual event organized by the Robotics club of SIT
              CORSIT. The primary objective is to introduce the club and its
              activities to the newcomers by displaying the bots that the
              members have created over the year. The event showcases various
              bots such as Line Follower Robots (LFR), Roboracer, Gesture
              controlled bots, Bluetooth controlled bots, etc. The exhibition
              provides students with an opportunity to witness and understand
              the workings of these bots up close. It serves as an excellent
              platform for the Robotics club to attract new members who are
              interested in this field.
            </p>
          </motion.div>
          <motion.div className="image w-full my-7 mx-0 relative md:w-1/2 flex justify-between ">
            <img
              className="h-60 w-1/2 md:h-80 rounded-md shadow-2xl "
              src="../../img/Events/img1.jpg"
              alt="one"
            />
            <img
              className="h-60 w-1/2 sm:h-80 rounded-md shadow-xl absolute -top-4 -right-2 "
              src="../../img/Events/img2.jpg"
              alt="two"
            />
          </motion.div>
        </div>

        {/* end of 1 */}

        <motion.div className="flex flex-col-reverse mt-10  first-des md:flex-row-reverse md:items-center md:justify-between md:mt-[4.5rem] ">
          <div className=" w-full md:w-[45%] text-lg text-start">
            <h2 className="font-semibold pb-4">Workshop</h2>
            <p>
              CORSIT offers free workshops on IoT, Arduino, cloud, and more,
              providing students with hands-on experience in building basic bots
              such as LFR, Bluetooth, and obstacle-avoiding bots. Participants
              learn to code and use different components to program the bot's
              brain. The club also conducts a paid workshop where a mentor
              guides students on emerging technologies with a mix of studio
              practice and lectures. The workshop aims to enhance practical
              skills and teach the theory and context behind the practice.
            </p>
          </div>
          <div className="image w-full my-7 mx-0 relative md:w-1/2 flex justify-between ">
            <img
              className="h-60 w-1/2 md:h-80 rounded-md shadow-2xl "
              src="../../img/Events/imgg3.png"
              alt="one"
            />
            <img
              className="h-60 w-1/2 sm:h-80 rounded-md shadow-xl absolute -top-4 -right-2 "
              src="../../img/Events/imgg4.png"
              alt="two"
            />
          </div>
        </motion.div>

        {/* end of 2 */}

        <div className="flex flex-col-reverse mt-10  first-des md:flex-row md:items-center md:justify-between md:mt-[4.5rem] ">
          <div className=" w-full md:w-[45%] text-lg text-start">
            <h2 className="font-semibold pb-4">Hackathon</h2>
            <p>
              CORSIT, the Robotics club of SIT, conducts an annual 12-hour
              hackathon since 2017, where students collaborate to find
              innovative solutions to real-world problems in areas such as IoT,
              cybersecurity, blockchain, and data science etc. The event
              provides a platform for teams to compete for exciting cash prizes
              and recognition.
            </p>
          </div>
          <div className="image w-full my-7 mx-0 relative md:w-1/2 flex justify-between ">
            <img
              className="h-60 w-1/2 md:h-80 rounded-md shadow-2xl "
              src="../../img/Events/img5.jpg"
              alt="one"
            />
            <img
              className="h-60 w-1/2 sm:h-80 rounded-md shadow-xl absolute -top-4 -right-2 "
              src="../../img/Events/img6.jpg"
              alt="two"
            />
          </div>
        </div>

        {/* end of 3 */}

        <div className="flex flex-col-reverse mt-10  first-des md:flex-row-reverse md:items-center md:justify-between md:mt-[4.5rem] ">
          <div className=" w-full md:w-[45%] text-lg text-start">
            <h2 className="font-semibold pb-4">Robocor</h2>
            <p>
              Robocor, a nationally renowned Robotics Competition, which is one
              of the biggest events in Karnataka. It provides a platform for
              participants to showcase their innovative designs and compete for
              glory. In Robocor, the team has successfully organized several
              events such as Dcode, Spardha, Rugged Rage, Robo Soccer, Arduino
              Clash, Binary Rash, Project Symposium, Paper Presentation, and
              Init_Rc.
            </p>
          </div>
          <div className="image w-full my-7 mx-0 relative md:w-1/2 flex justify-between ">
            <img
              className="h-60 w-1/2 md:h-80 rounded-md shadow-2xl "
              src="../../img/Events/img7.jpg"
              alt="one"
            />
            <img
              className="h-60 w-1/2 sm:h-80 rounded-md shadow-xl absolute -top-4 -right-2 "
              src="../../img/Events/img8.jpg"
              alt="two"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurEvents;
