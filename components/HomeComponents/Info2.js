import { MDBIcon } from "mdbreact";
import { useRouter } from "next/router";
import Link from "next/link";

import { Fade } from "react-awesome-reveal";

const Info2 = () => {
    const router = useRouter();
    return (
        <div className="container">
            <Fade triggerOnce>
                <h2 className="text-center my-5 pt-3">{router.locale === "en" ? "Travelling around the world" : "Rólunk"}</h2>
            </Fade>

            <Fade triggerOnce>
                <p className="text-center mb-5 pb-3 section-description desctext">
                    {router.locale === "en"
                        ? `We are often renewing our bus fleet, so our customers can still travel at luxury level. 
                    Depending on the number of passenger we have elevated or double-decker buses or just minibuses with all the extras (air conditioning, toilet, DVD).`
                        : `2021-ben bővítettük tevékenységünket teherszállítással, majd 2022-ben autóbusz- és teherautómentéssel! Jelenleg 4 db járművel rendelkezünk. Gépjárműveink 12,15,18 tonna össztömegűek. Várjuk leendő megrendelőinket!                        `}
                </p>
            </Fade>

            <Fade triggerOnce>
                <div className="text-center row">
                    <div className="mb-2 col-md-4">
                        <MDBIcon icon="camera-retro" className="logo" style={{ fontSize: "4rem", color: "#fb3" }} />
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>
                            {router.locale === "en" ? "Experience" : "Tapasztalat"}
                        </h4>
                        <p className="grey-text">
                            {router.locale === "en"
                                ? `We have nearly 30 years of experience in travel. 
                            We are constantly listening to the feedback of our customers, thus ensuring the highest quality service.`
                                : `Közel 30 éves tapasztalattal rendelkezünk az utaztatásban. 
                            Folyamatosan hallgatunk ügyfeleink visszajelzéseire, ezáltal biztosítva a legminőségibb szolgáltatást.`}
                        </p>
                    </div>

                    <div className="mb-2 col-md-4">
                        <MDBIcon icon="user-shield" className="logo" style={{ fontSize: "4rem", color: "#fb3" }} />
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>
                            {router.locale === "en" ? "Safety" : "Biztonság"}
                        </h4>
                        <p className="grey-text">
                            {router.locale === "en"
                                ? `The technical status and aesthetic condition of our vehicles is impeccable. 
                        Our drivers strictly adhere to the rest time, guaranteeing that you feel safe during your trip.`
                                : `Járműveink műszaki és esztétikai állapota kifogástalan. 
                            Gépkocsivezetőink szigorúan betartják a pihenési időt, garantálva a lehető legbiztonságosabb áruszállítást.`}
                        </p>
                    </div>

                    <div className="mb-2 col-md-4">
                        <MDBIcon icon="heart" className="logo" style={{ fontSize: "4rem", color: "#fb3" }} />
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>
                            {router.locale === "en" ? "Adventure" : "Élmény"}
                        </h4>
                        <p className="grey-text">
                            {router.locale === "en"
                                ? `Our services also include the organization of individual trips, 
                        with which we can provide our passengers with an unforgettable experience. You can request a quotation by clicking`
                                : `Szolgatásaink közé tartozik az egyedik utazások lebonyolítása is, melyekkel felejthetetlen élményt tudunk nyújtani utasainknak. Kérjen árajánlatot `}{" "}
                            <Link href="/offer" passHref>
                                <a className="privacytext">{router.locale === "en" ? "here." : "ide"}</a>
                            </Link>
                            {router.locale !== "en" && " kattintva"}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Info2;
