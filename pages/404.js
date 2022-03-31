import Head from "next/head";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

function Notfound() {
    const { locale } = useRouter();
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <Fade triggerOnce direction="up">
                        <div className="notfound-404">
                            <Fade triggerOnce>
                                <h1>Oops!</h1>
                            </Fade>
                            <h2>{locale === "en" ? "404 - The Page can't be found" : "404 - Az oldal nem található"}</h2>
                        </div>
                    </Fade>
                </div>
            </div>
            <Head>
                <title>{locale === "en" ? "Contibus - Specialist Coach Travel" : "Contibus - Az utazás szakértői"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://contibus.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus.hu/img/3.jpg" />
            </Head>
        </>
    );
}

export default Notfound;
