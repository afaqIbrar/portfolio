"use client";
import React from "react";
import { skillsData } from "@/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};
function Skills() {
    return (
        <section
            id="skills"
            className="mb-20 max-w-full scroll-mt-28 text-center sm:mb-40 justify-center mx-20 gap-4"
        >
            <div className="font-medium capitalize text-3xl mb-8 text-center">
                Skills
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        key={index}
                        className="bg-white borderBlack dark:bg-gray-800 dark:text-gray-200 dark:border-opacity-90 rounded-xl px-5 py-3"
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
