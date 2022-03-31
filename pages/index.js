import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "../components/GlobalComponents/Spinner";

const Info = dynamic(() => import("../components/HomeComponents/Info"), { loading: () => <Spinner /> });
const Gallery = dynamic(() => import("../components/GlobalComponents/Gallery"), { loading: () => <Spinner /> });
const Info2 = dynamic(() => import("../components/HomeComponents/Info2"), { loading: () => <Spinner /> });
const Streak = dynamic(() => import("../components/HomeComponents/Streak"), { loading: () => <Spinner /> });
const Cards = dynamic(() => import("../components/HomeComponents/Cards"), { loading: () => <Spinner /> });
import Carousel from "../components/GlobalComponents/Carousel";

import { pageVariants } from "../components/GlobalComponents/Initaltransition";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Testimonials from "../components/HomeComponents/Testimonials";
import SetContentFulData from "../lib/SetContentFulData";
import TrucksBody from "../components/TrucksComponents/TrucksBody";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { settrucksData } from "../lib/redux/reducers";

const Home = ({ trucksData }) => {
    const { locale } = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(settrucksData(trucksData));
    }, []);

    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants}>
            <Carousel />
            <Info />
            <TrucksBody />
            <Gallery />
            <Info2 />
            <Testimonials />
            <Streak />
            <Cards />
            <Head>
                <title>{locale === "en" ? "ContiBus - Specialist Coach Travel" : "ContiTrans - Főoldal"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://neoline-contitrans.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://neoline-contitrans.hu/img/3.jpg" />
                <meta property="og:url" content="https://neoline-contitrans.hu" />
            </Head>
        </motion.section>
    );
};

export async function getServerSideProps({ res }) {
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=600, stale-while-revalidate=59");

    const trucksData = await SetContentFulData("trucks", "sys.createdAt");

    return {
        props: {
            trucksData: trucksData || null,
        },
    };
}

export default Home;
