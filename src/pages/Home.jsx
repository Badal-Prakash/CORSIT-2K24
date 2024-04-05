import ParticlesComponent from "../components/ParticlesComponent";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import bot from "../../public/img/bots/pngwing.com (2).png";
import { ReactTyped } from "react-typed";
import styled from "styled-components";
import OurEvents from "./OurEvents";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffff;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100vh; /* Remove fixed height for mobile */
  }
`;

const ParticleContainer = styled.div`
  height: 100vh;
  z-index: -1;
  @media (max-width: 768px) {
    height: auto; /* Remove fixed height for mobile */
  }
`;

function Home() {
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
    <div className="">
      <Container>
        <ParticleContainer>
          <ParticlesComponent id="particles" />
        </ParticleContainer>
        <div className="Left">
          <motion.div
            className=""
            initial={{ y: "-100vh" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <span className="text-red-600 md:text-5xl sm:text-4xl text-base font-bold whitespace-nowrap md:pl-4 pl-1 mb-9 main_">
              Learn With Us
            </span>
          </motion.div>
          <motion.div
            className="md:text-5xl sm:text-6xl text-red-600 text-base font-bold whitespace-nowrap md:pl-4 pl-1 mt-4 "
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactTyped
              strings={[
                "Robotics",
                "Web Development",
                "Machine Learning",
                "App Development",
                "Arduino",
                "Photoshop",
                "Video Editing",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </motion.div>
        </div>
        <div className="Right">
          <motion.img
            src={bot}
            alt=""
            className="bot_img"
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ scale: 0.8, opacity: 1, x: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 1.3 }}
          />
        </div>
      </Container>
      <OurEvents />
    </div>
  );
}

export default Home;
