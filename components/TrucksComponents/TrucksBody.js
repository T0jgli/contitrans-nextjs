import { MDBIcon } from "mdbreact";
import { useRouter } from "next/router";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import Carddeck from "./Carddeck";

const TrucksBody = () => {
    const trucksData = useSelector((state) => state.app.trucksData);
    const { locale } = useRouter();
    let idd = 0;

    return (
        <>
            <Fade direction="down" triggerOnce>
                <h3 className="text-center text-muted my-4" id="buses-text">
                    {locale === "en" ? "Our trucks" : "Teherautóink"}
                </h3>
            </Fade>
            <div className="text-center my-5 mx-auto px-lg-0" id="trucks-container">
                {trucksData?.map((item, index, array) => {
                    if ((index + 1) % 2 !== 0) {
                        idd++;
                        return (
                            <Carddeck
                                key={index}
                                idd={idd}
                                itemid={index + 1}
                                item={item}
                                nextitemid={index + 2}
                                nextitem={array[index + 1]}
                                what={"Trucks"}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </>
    );
};

export default TrucksBody;
