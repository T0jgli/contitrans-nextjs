import { MDBAlert, MDBIcon } from "mdbreact";
import { Fade } from "react-awesome-reveal";

import { useRouter } from "next/router";
import Link from "next/link";
import TrucksBody from "../TrucksComponents/TrucksBody";

const Info = () => {
    const router = useRouter();

    return (
        <div className="mx-auto container">
            <Fade triggerOnce>
                <MDBAlert color="dark" className="rounded mt-5 d-none text-center">
                    <MDBIcon icon="exclamation" className=" pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                    {router.locale === "en"
                        ? "In this given situation we would like to ask our customers to wear a mask during the administration"
                        : "Egymás iránti bizalom és a helyzetre való tekintettel kérnénk mindenkit, hogy a személyes ügyintézés ideje alatt maszkot viseljenek"}
                    <MDBIcon icon="exclamation" className=" pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                </MDBAlert>
            </Fade>

            <div className="pt-5 mt-2 px-lg-0 row">
                <div className="mb-4 col-md-12">
                    <Fade triggerOnce>
                        <img loading="lazy" src="/img/3.jpg" className="img-fluid mx-auto d-block logo" alt="Contibus logo" />
                    </Fade>
                </div>
                {/* <div className="mb-4 mt-4 mt-md-0 col-md-6 d-none">
                    <Fade triggerOnce>
                        <section>
                            <h2 className="mb-3">{router.locale === "en" ? "Who are we?" : "Kik vagyunk mi?"}</h2>
                            <hr />
                            <p className="m-0">
                                {router.locale === "en"
                                    ? "The company has been dealing passenger traffic since 1992."
                                    : "Cégünk 1992 óta foglalkozik személyszállítással."}
                            </p>
                            <p className="m-0">
                                {router.locale === "en"
                                    ? "All of our buses fit the strict international standards."
                                    : "Minden autóbuszunk megfelel a szigorú nemzetközi előírásoknak."}{" "}
                            </p>
                            <p className="m-0 mb-2">
                                {router.locale === "en"
                                    ? "Our drivers have a lot of experience in European travel."
                                    : "Gépkocsivezetőink nagy tapasztalattal rendelkeznek az európai utaztatásban."}
                            </p>
                            <p className="font-weight-bolder">
                                {router.locale === "en"
                                    ? "In 2021, we have expanded our activities with freight transport! "
                                    : "2021-ben bővítettük tevékenységünket teherszállítással! "}
                                {router.locale === "en"
                                    ? `We currently have 4 vehicles. Our vehicles have a total weight of 12,15,18,18 tonna, which you can view by clicking `
                                    : `Jelenleg 4 db járművel rendelkezünk. Gépjárműveink 12,15,18,18 össztömegűek, melyeket `}
                                <Link href="/trucks" passHref>
                                    <a className="privacytext">{router.locale === "en" ? "HERE. " : "IDE "}</a>
                                </Link>
                                {router.locale === "en"
                                    ? "We are waiting for our future customers!"
                                    : "kattintva tekinthet meg. Várjuk leendő megrendelőinket!"}
                            </p>
                            <p className="mt-1 mb-0 desctext">{router.locale === "en" ? "Our partners: " : "Partnereink:"}</p>
                            <ul className="mt-0 pt-0 partners desctext">
                                <li>{router.locale === "en" ? "travel agencies" : "utazási irodák"}</li>
                                <li>{router.locale === "en" ? "music bands" : "zenekarok"}</li>
                                <li>{router.locale === "en" ? "companies" : "vállalkozások"}</li>
                                <li>{router.locale === "en" ? "foundations" : "alapítványok"}</li>
                                <li>{router.locale === "en" ? "schools" : "iskolák"}</li>
                                <li>{router.locale === "en" ? "sports associations" : "sportegyesületek"}</li>
                                <li>{router.locale === "en" ? "or just a group of friends" : "vagy csak baráti társaságok"}</li>
                            </ul>
                        </section>
                    </Fade>
                </div> */}
            </div>
        </div>
    );
};

export default Info;
