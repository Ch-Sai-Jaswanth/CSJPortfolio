import { motion } from "framer-motion";
import { styles } from "../styles";
import React from "react";
import "../../src/index.css";
import myImage from "../assets/Laptop.png";

const Self = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sai Jaswanth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full Stack <br className="sm:block hidden" />
            web applications
          </p>
        </div>
      </div>
      <div className="absolute inset-0 top-[240px] w-full flex justify-center items-center">
        <img src={myImage} alt="Image" className="max-w-full h-auto" />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 26, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Self;
