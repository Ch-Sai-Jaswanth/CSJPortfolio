import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
//import Button from "./Button";
import { SectionWrapper } from "../hoc";

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]">
                    Here are some of the projects I have worked on. Click on the card to view the project.
                </motion.p>
            </div>
        </>
    );
}

export default SectionWrapper(Projects, "");