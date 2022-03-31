import { MDBCarousel, MDBMask, MDBCarouselInner, MDBCarouselItem, MDBView, MDBIcon, MDBBtn } from "mdbreact";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const shuffle = (arr) => [...arr].reduceRight((res, _, __, arr) => (res.push(arr.splice(0 | (Math.random() * arr.length), 1)[0]), res), []);

const Carousel = () => {
    const router = useRouter();
    const [carids, setcarids] = useState([]);

    useEffect(() => {
        setcarids(shuffle(["carr11", "carr22", "carr33"]));
    }, []);

    return (
        <>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className={router.pathname !== "/" ? "carousel carouselup z-depth-1 " : "carousel headerclip z-depth-1"}
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView id={carids[0]} className={router.pathname !== "/" ? "h-100 carr" : "carr"}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">
                                                {router.locale === "en" ? (
                                                    <span>
                                                        <span className="d-none d-md-inline">ContiTrans </span>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <span className="d-none d-md-inline">ContiTrans </span>
                                                    </span>
                                                )}
                                            </strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2" />
                                                {router.locale === "en" ? "Expertise and experience" : "Szakértelem és tapasztalat"}
                                                <MDBIcon icon="check" className="px-2" />
                                            </span>
                                        </p>
                                    </Fade>
                                    {router.pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>
                                                <MDBBtn
                                                    onClick={() => {}}
                                                    color="warning"
                                                    size="lg"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.facebook.com/Neoline-ContiTrans-101101795149788"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"
                                                >
                                                    <span className="">
                                                        {router.locale === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"}
                                                    </span>
                                                    <MDBIcon fab icon="facebook-square" className="pl-2" />
                                                </MDBBtn>
                                            </Fade>
                                        </>
                                    ) : null}
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView id={carids[1]} className={router.pathname !== "/" ? "h-100 carr" : "carr"}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">
                                                {router.locale === "en" ? (
                                                    <span>
                                                        <span className="d-none d-md-inline">ContiTrans </span>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <span className="d-none d-md-inline">ContiTrans </span>
                                                    </span>
                                                )}
                                            </strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block text-center">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2 d-md-inline d-none" />{" "}
                                                {router.locale === "en" ? "Safety" : "Biztonság"}
                                                <MDBIcon icon="check" className="px-2" />
                                                {router.locale === "en" ? "Comfort" : "Gyorsaság"}
                                                <MDBIcon icon="check" className="px-2" />
                                                {router.locale === "en" ? "Standards" : "Pontosság"}
                                                <MDBIcon icon="check" className="px-2 d-md-inline d-none" />
                                            </span>
                                        </p>
                                    </Fade>

                                    {router.pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>
                                                <MDBBtn
                                                    onClick={() => {}}
                                                    color="warning"
                                                    size="lg"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.facebook.com/Neoline-ContiTrans-101101795149788"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"
                                                >
                                                    <span className="">
                                                        {router.locale === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"}
                                                    </span>
                                                    <MDBIcon fab icon="facebook-square" className="pl-2" />
                                                </MDBBtn>
                                            </Fade>
                                        </>
                                    ) : null}
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView id={carids[2]} className={router.pathname !== "/" ? "h-100 carr" : "carr"}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">
                                                {router.locale === "en" ? (
                                                    <span>
                                                        <span className="d-none d-md-inline">ContiTrans </span>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <span className="d-none d-md-inline">ContiTrans </span>
                                                    </span>
                                                )}
                                            </strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2" />
                                                {router.locale === "en" ? "Expertise and experience" : "Szakértelem és tapasztalat"}
                                                <MDBIcon icon="check" className="px-2" />
                                            </span>
                                        </p>
                                    </Fade>

                                    {router.pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>
                                                <MDBBtn
                                                    onClick={() => {}}
                                                    color="warning"
                                                    size="lg"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.facebook.com/Neoline-ContiTrans-101101795149788"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"
                                                >
                                                    <span className="">
                                                        {router.locale === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"}
                                                    </span>
                                                    <MDBIcon fab icon="facebook-square" className="pl-2" />
                                                </MDBBtn>
                                            </Fade>
                                        </>
                                    ) : null}
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </>
    );
};

export default Carousel;
