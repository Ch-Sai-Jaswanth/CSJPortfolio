import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
//import Button from "./Button";
import { SectionWrapper } from "../hoc";
import { projects } from "../utils/constants";

const ProjectCard = ({ index, name, description, image, link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
            <Tilt options={{ max: 25, scale : 1, speed: 450 }}
            className="bg-neutral-900 p-5 rounded-2xl sm:w-[360px] w-full">

                <div className="relative w-full h-[230px]">
                    <img src={image} alt="Portfolio image" className="w-full h-full object-cover rounded-2xl" />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div onClick={() => window.open(link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
            </Tilt>
        </motion.div> 
    )
}
const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]">
                    Here are some of the projects I have worked on. Click on the card to view the project.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(Projects, "");