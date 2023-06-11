import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { pageVariants } from "../../components/GlobalComponents/Initaltransition";
import Spinner from "../../components/GlobalComponents/Spinner";

import Carousel from "../../components/GlobalComponents/Carousel";
const OneTruckBody = dynamic(() => import("../../components/TrucksComponents/OneTruckBody"), { loading: () => <Spinner /> });

import { MDBBtn } from "mdbreact";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import { setIDs, setOneContentfulData } from "../../lib/SetContentFulData";

const OneBus = ({ truckData }) => {
    const router = useRouter();
    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants}>
            <Carousel />
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <Fade triggerOnce direction="up">
                <div className="flex-center mt-5 mx-auto">
                    <MDBBtn
                        id="back-button"
                        color="warning"
                        onClick={() => {
                            router.back();
                        }}
                        className="my-1 black-text roundedbtn font-weight-bolder"
                    >
                        « {router.locale === "en" ? "Back" : "Vissza"}
                    </MDBBtn>
                </div>
            </Fade>
            <OneTruckBody thistruck={truckData} />
        </motion.section>
    );
};

export async function getStaticProps(context) {
    const truckData = await setOneContentfulData("trucks", context.params.truck);

    return {
        props: {
            truckData: truckData ? truckData[0] : null,
        },
        revalidate: 60,
    };
}

export async function getStaticPaths({ locales }) {
    let paths = [];
    const entries = await setIDs("trucks");
    entries.forEach((e) => {
        for (const locale of locales) {
            paths.push({
                params: {
                    truck: e.fields.id,
                },
                locale,
            });
        }
    });

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    };
}

export default OneBus;
