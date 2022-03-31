import { useState } from "react";
import { MDBMask } from "mdbreact";

import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

import { useEffect } from "react";
import { useRouter } from "next/router";

const images = ["/img/carousel_1_.jpg", "/img/carousel_2_.jpg", "/img/carousel_3_.jpg"];

const Streak = () => {
    const { locale } = useRouter();
    const [focus, setFocus] = useState(false);
    const [bg, setbg] = useState("");

    useEffect(() => {
        setbg(images[Math.floor(Math.random() * (3 - 1 + 1))]);
    }, []);

    return (
        <div className="streak streak-photo streak-long-2">
            <div
                className="position-relative overflow-hidden"
                style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed", backgroundSize: "cover" }}
            >
                <MDBMask overlay="black-light" className="flex-center">
                    <div className="py-5 container">
                        <Fade triggerOnce direction="down">
                            <h3 className="text-center mb-5 pb-4 white-text font-weight-bolder">
                                <span>{locale === "en" ? "Some facts about us" : "Néhány tény rólunk"}</span>
                            </h3>
                        </Fade>
                        <Fade
                            onVisibilityChange={(onScreen) => {
                                if (onScreen) {
                                    setFocus(true);
                                }
                            }}
                            delay={75}
                            triggerOnce
                            direction="up"
                        >
                            <div className="text-center row">
                                <div className="mb-2 col-md-3">
                                    <h2 className="white-text mb-1 font-weight-bold" style={{ fontSize: "2.5rem" }} aria-label="80000">
                                        <CountUp
                                            start={focus ? 0 : null}
                                            redraw={true}
                                            useEasing={true}
                                            duration={2}
                                            end={80000}
                                            separator={" "}
                                            suffix=" +"
                                        />
                                    </h2>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">
                                        {locale === "en" ? "Happy clients" : "Elégedett ügyfél"}
                                    </p>
                                </div>
                                <div className="mb-2 col-md-3">
                                    <h2 className="white-text mb-1 font-weight-bold" style={{ fontSize: "2.5rem" }} aria-label="100000">
                                        <CountUp
                                            start={focus ? 0 : null}
                                            redraw={true}
                                            useEasing={true}
                                            duration={2}
                                            end={100000}
                                            separator={" "}
                                            suffix=" +"
                                        />
                                    </h2>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">
                                        {locale === "en" ? "Projects completed" : "Sikeres projekt"}
                                    </p>
                                </div>
                                <div className="mb-2 col-md-3">
                                    <h2 className="white-text mb-1 font-weight-bold" style={{ fontSize: "2.5rem" }} aria-label="50000">
                                        <CountUp
                                            start={focus ? 0 : null}
                                            redraw={true}
                                            useEasing={true}
                                            duration={2}
                                            end={50000}
                                            separator={" "}
                                            suffix=" +"
                                        />
                                    </h2>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">{locale === "en" ? "Destinations" : "Úticél"}</p>
                                </div>
                                <div className="mb-2 col-md-3">
                                    <h2 className="white-text mb-1 font-weight-bold" style={{ fontSize: "2.5rem" }} aria-label="150">
                                        <CountUp
                                            start={focus ? 0 : null}
                                            redraw={true}
                                            useEasing={true}
                                            duration={2}
                                            end={150}
                                            separator={" "}
                                            suffix=" +"
                                        />
                                    </h2>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">
                                        {locale === "en" ? "Visited country" : "Meglátogatott ország"}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </MDBMask>
            </div>
        </div>
    );
};

export default Streak;
