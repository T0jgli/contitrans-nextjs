export const pageVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export const tableAnimation = {
    initial: { x: "-2rem", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
    exit: {
        x: "2rem",
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const cardAnimation = {
    initial: { x: "2rem", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
    exit: {
        x: "-2rem",
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const muzeumAnimation = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const loadingAnimation = {
    initial: { opacity: 0, zIndex: -5 },
    animate: {
        opacity: 1,
        zIndex: 50,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
    exit: {
        opacity: 0,
        zIndex: -5,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

/*
import { useState } from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
 const blackBox = {
    initial: {
        height: "100%",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.5,
            when: "afterChildren",
        },
    },
};

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const InitialTransition = () => {
    const { locale } = useRouter()
    const [complete, setcomplete] = useState(false)
    return (
        <>
            <motion.div
                className={`position-absolute animdiv ${complete ? ("d-none") : ("d-flex")} justify-content-center align-items-center w-100 p-0 m-0`}
                style={{ zIndex: "1031", backgroundColor: "black" }}
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationStart={() => {
                    document.body.classList.add("overflow-hidden")
                }}
                onAnimationComplete={() => {
                    localStorage.setItem("InitalTransition", false)
                    setcomplete(true)
                    document.body.classList.remove("overflow-hidden")
                }
                }
            >
                <motion.svg variants={textContainer} className="position-absolute w-100 d-flex" style={{ zIndex: "1029" }}>
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={window.innerWidth}
                        height={window.innerHeight}
                        className="text-white"
                    >
                        <rect className="w-100 h-100" style={{ fill: "currentcolor" }} />
                        <motion.rect
                            variants={text}
                            className="w-100 h-100 text-dark" style={{ fill: "currentcolor" }}
                        />
                    </pattern>
                    <text
                        className="font-weight-bold"
                        textAnchor="middle"
                        x="50%"
                        y="50%"
                        style={{ fill: "url(#pattern)", fontSize: "25px" }}
                    >
                        {locale === "en" ? ("There is something new") : ("Megújultunk")}
                    </text>
                </motion.svg>
            </motion.div>
        </>
    );
};



export default InitialTransition */

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const FullscreenLoading = () => {
    const router = useRouter();

    const [pageLoading, setPageLoading] = useState(false);
    useEffect(() => {
        const handleStart = () => {
            setPageLoading(true);
        };
        const handleComplete = () => {
            setPageLoading(false);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);

    if (pageLoading)
        return (
            <motion.div
                initial="initial"
                exit="exit"
                animate="animate"
                variants={loadingAnimation}
                className={`d-flex justify-content-center position-fixed align-items-center`}
                style={{ backgroundColor: "rgba(0,0,0,0.6)", left: "0", top: "0", width: "100%", height: "100%" }}
            >
                <CircularProgress style={{ color: "white" }} size={60} />
            </motion.div>
        );

    return null;
};

export default FullscreenLoading;
