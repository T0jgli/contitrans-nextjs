import { useState } from "react";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import dynamic from "next/dynamic";
import Spinner from "../GlobalComponents/Spinner";

const Modals = dynamic(() => import("./Modals"), { loading: () => <Spinner /> });
const Contact = dynamic(() => import("./Contact"), { loading: () => <Spinner /> });

import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga";
import { useRouter } from "next/router";

const Cards = () => {
    const { locale } = useRouter();
    const [modalsopen, setmodalsopen] = useState({
        open: false,
        style: null,
        title: {
            en: null,
            hu: null,
        },
        details: null,
    });

    return (
        <>
            <div className="pt-5 z-depth-1" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="services__container flex-center flex-column">
                    <div className="services__wrapper" id="services">
                        <Fade triggerOnce>
                            <div
                                onClick={async () => {
                                    ReactGA.modalview("/drivingtime");
                                    const { Vezetesiidocontent } = await import("./Modalcontents");
                                    setmodalsopen({
                                        open: true,
                                        style: "info",
                                        title: {
                                            en: "Driving time",
                                            hu: "Vezetési idő",
                                        },
                                        details: <Vezetesiidocontent />,
                                    });
                                }}
                                className="services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3"
                            >
                                <div className="view mb-3 rounded">
                                    <img className="icon" src="/img/svgs/time.svg" alt="Vezetésiidő kártya kép" />
                                </div>
                                <p className="text-center w-100 d-block mb-3 arrowdropup">
                                    <ArrowDropUp />
                                </p>

                                <h4>{locale === "en" ? "Driving time" : "Vezetési idő"}</h4>
                            </div>
                        </Fade>

                        <Fade triggerOnce>
                            <div
                                onClick={async () => {
                                    ReactGA.modalview("/joboffers");
                                    const { Allasajanlatcontent } = await import("./Modalcontents");

                                    setmodalsopen({
                                        open: true,
                                        style: "success",
                                        title: {
                                            en: "Current job offers",
                                            hu: "Aktuális állásajánlataink",
                                        },
                                        details: <Allasajanlatcontent />,
                                    });
                                }}
                                className="services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3"
                            >
                                <div className="view mb-3 rounded">
                                    <img className="icon" src="/img/svgs/job.svg" alt="Állásajánlat kártya kép" />
                                </div>
                                <p className="text-center w-100 d-block mb-3 arrowdropup">
                                    <ArrowDropUp />
                                </p>

                                <h4>{locale === "en" ? "Job offer" : "Állásajánlataink"}</h4>
                            </div>
                        </Fade>

                        <Fade triggerOnce>
                            <div
                                onClick={async () => {
                                    ReactGA.modalview("/gls");
                                    const { Glscontent } = await import("./Modalcontents");

                                    setmodalsopen({
                                        open: true,
                                        style: "warning",
                                        title: {
                                            en: "GLS ParcelShop",
                                            hu: "GLS Csomagpont",
                                        },
                                        details: <Glscontent />,
                                    });
                                }}
                                className="services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3"
                            >
                                <div className="view mb-3 rounded">
                                    <img className="icon" src="/img/svgs/package.svg" alt="GLS kép" />
                                    <img className="icon__edit" src="/img/svgs/gls.svg" alt="GLS kártya kép" />
                                </div>
                                <p className="text-center w-100 d-block mb-3 arrowdropup">
                                    <ArrowDropUp />
                                </p>

                                <h4>{locale === "en" ? "GLS parcelshop" : "GLS csomagpont"}</h4>
                            </div>
                        </Fade>

                        <Fade triggerOnce>
                            <div
                                onClick={async () => {
                                    ReactGA.modalview("/luggagestore");
                                    const { Csomagmegorzescontent } = await import("./Modalcontents");

                                    setmodalsopen({
                                        open: true,
                                        style: "success",
                                        title: {
                                            en: "Luggage store",
                                            hu: "Csomagmegőrzés",
                                        },
                                        details: <Csomagmegorzescontent />,
                                    });
                                }}
                                className="services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3"
                            >
                                <div className="view mb-3 rounded">
                                    <img className="icon" src="/img/svgs/suitcase.svg" alt="Csomagmegőrzés kártya kép" />
                                </div>
                                <p className="text-center w-100 d-block mb-3 arrowdropup">
                                    <ArrowDropUp />
                                </p>

                                <h4>{locale === "en" ? "Luggage store" : "Csomagmegőrzés"}</h4>
                            </div>
                        </Fade>

                        <Fade triggerOnce>
                            <div
                                onClick={async () => {
                                    ReactGA.modalview("/dpd");
                                    const { Dpdcontent } = await import("./Modalcontents");

                                    setmodalsopen({
                                        open: true,
                                        style: "danger",
                                        title: {
                                            en: "DPD ParcelShop",
                                            hu: "DPD Csomagpont",
                                        },
                                        details: <Dpdcontent />,
                                    });
                                }}
                                className="services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3"
                            >
                                <div className="view mb-3 rounded">
                                    <img className="icon" src="/img/svgs/package.svg" alt="DPD kép" />
                                    <img className="icon__edit" src="/img/svgs/dpd.svg" alt="DPD kártya kép" />
                                </div>
                                <p className="text-center w-100 d-block mb-3 arrowdropup">
                                    <ArrowDropUp />
                                </p>

                                <h4>{locale === "en" ? "DPD parcelshop" : "DPD csomagpont"}</h4>
                            </div>
                        </Fade>
                        <Fade triggerOnce>
                            <div
                                onClick={async () => {
                                    ReactGA.modalview("/dpd");
                                    const { Wishcontent } = await import("./Modalcontents");

                                    setmodalsopen({
                                        open: true,
                                        style: "info",
                                        title: {
                                            en: "Wish Local",
                                            hu: "Wish átvevőpont",
                                        },
                                        details: <Wishcontent />,
                                    });
                                }}
                                className="services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3"
                            >
                                <div className="view mb-3 rounded">
                                    <img className="icon" src="/img/svgs/package.svg" alt="Wish kép" />
                                    <img className="icon__edit" src="/img/wish.png" alt="Wish kártya kép" />
                                </div>
                                <p className="text-center w-100 d-block mb-3 arrowdropup">
                                    <ArrowDropUp />
                                </p>

                                <h4>{locale === "en" ? "Wish Local" : "Wish átvevőpont"}</h4>
                            </div>
                        </Fade>
                    </div>
                </div>
                <hr className="w-50 mx-auto my-5" />
                <Contact />
            </div>
            <Modals modalsopen={modalsopen} setmodalsopen={setmodalsopen} />
        </>
    );
};

export default Cards;
