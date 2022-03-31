import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setbusesData, setmuzeumData, settrucksData } from "../lib/redux/reducers";

import Navbar from "./GlobalComponents/Navbar";
import SetContentFulData from "../lib/SetContentFulData";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import dynamic from "next/dynamic";
import Spinner from "./GlobalComponents/Spinner";
import FullscreenLoading from "./GlobalComponents/Initaltransition";

const Footer = dynamic(() => import("./GlobalComponents/Footer"), { loading: () => <Spinner /> });
const Scrolltopbutton = dynamic(() => import("./GlobalComponents/Scrolltopbutton"), { loading: () => <Spinner /> });
const Cookie = dynamic(() => import("./GlobalComponents/Cookie"));
const Snackbars = dynamic(() => import("./GlobalComponents/Snackbars"));

const DefaultLayout = ({ children }) => {
    const dispatch = useDispatch();
    const { pathname } = useRouter();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, [pathname]);

    return (
        <>
            <Navbar />
            {children}
            <Cookie />

            <Footer />
            <div className="d-none d-md-block">
                <Scrolltopbutton />
            </div>
            <FullscreenLoading />
            <Snackbars />
        </>
    );
};

export default DefaultLayout;
