/** @jsxImportSource @emotion/react */
'use client'

import { experiencesData } from '@/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { css } from '@emotion/react';

const ExperienceTimeline = () => {
    const timelineStyle = css`
  .vertical-timeline::before {
    background-color: #FFF;
  }
`;
    const refView = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: refView,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);



    return (
        <div className="py-10 w-full" id="experience" css={timelineStyle}>
            <h1 className="heading">
                My <span className="text-blue-800">work experience</span>
            </h1>
            <motion.div
                style={{ scale: scaleProgress, opacity: scaleProgress }}
            >
                <section className="w-full mt-12">
                    <VerticalTimeline lineColor='#FF0000'>
                        {experiencesData.map((item, ind) => (
                            <React.Fragment key={ind}>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: "#000319",
                                        boxShadow: "none",
                                        border: "0.5px solid #ffffff",
                                        textAlign: "left",
                                        padding: "1.3rem 2rem",
                                        animation: "ease-in-out",
                                        visibility: "visible",
                                    }}

                                    contentArrowStyle={{
                                        borderRight: "0.4rem solid #ffffff",
                                        visibility: "visible",
                                    }}
                                    date={item.date}
                                    icon={item.icon}
                                    iconStyle={{
                                        background: "#161616",
                                        fontSize: "1.5rem",
                                        visibility: "visible",
                                    }}
                                >
                                    <h3 className="text-start text-xl md:text-2xl font-bold">{item.title}</h3>
                                    <p className="font-normal italic !mt-0 ">{item.location}</p>
                                    <p className="text-start text-white mt-3 font-semibold">
                                        {item.description}
                                    </p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))}
                    </VerticalTimeline>

                </section>
            </motion.div>
        </div >
    )
}

export default ExperienceTimeline