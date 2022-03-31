import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-image-lightbox/style.css";

import "../styles/index.scss";

import DefaultLayout from "../components/DefaultLayout";
import ReactGA from "react-ga";
import { wrapper, store } from "../lib/redux/store";

if (process.env.NODE_ENV == "production") ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_GAID);
else {
    if (typeof window !== "undefined" && window.Cypress) {
        window.store = store;
    }
}

const _app = ({ Component, pageProps }) => {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    );
};

export default wrapper.withRedux(_app);
