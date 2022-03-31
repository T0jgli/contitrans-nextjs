import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "../components/GlobalComponents/Spinner";

const TowingBody = dynamic(() => import("../components/TowingComponents/TowingBody"), { loading: () => <Spinner /> });
import Carousel from "../components/GlobalComponents/Carousel";

import { pageVariants } from "../components/GlobalComponents/Initaltransition";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Buses = () => {
    const router = useRouter();

    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants}>
            <Carousel />
            <TowingBody />
            <Head>
                <title>{router.locale === "en" ? "Autóbusz- és teherautómentés - ContiTrans" : "Autóbusz- és teherautómentés - ContiTrans"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://neoline-contitrans.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://neoline-contitrans.hu/img/3.jpg" />
                <meta property="og:url" content="https://neoline-contitrans.hu/buses" />
                <link rel="alternate" hrefLang="en" href="https://neoline-contitrans.hu/en/buses" />
                <link rel="alternate" hrefLang="hu" href="https://neoline-contitrans.hu/buses" />
            </Head>
        </motion.section>
    );
};

export default Buses;
