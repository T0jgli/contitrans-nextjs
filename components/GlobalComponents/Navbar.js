import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { MDBIcon } from "mdbreact";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import Link from "next/link";

import { setCookie } from "../../lib/helpers/CookieHelper";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import useScreenWidth from "../../lib/hooks/useScreenWidth";

const menuitems = [
    {
        href: "/",
        title: {
            hu: "Kezdőlap",
            en: "Home",
        },
    },
    {
        href: "/towing",
        title: {
            hu: "Autóbusz és kamion mentés",
            en: "Our Trucks",
        },
    },
];

const Navbar = () => {
    const router = useRouter();
    const [langtoast, setlangtoast] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [navbarbg, setnavbarbg] = useState(false);
    const [isMobile] = useScreenWidth(992);

    useEffect(() => {
        if (typeof window !== undefined) {
            const navbarScroll = () => {
                if (window.scrollY >= 75) {
                    setnavbarbg(true);
                } else {
                    setnavbarbg(false);
                }
            };
            window.addEventListener("scroll", navbarScroll);

            return () => window.removeEventListener("scroll", navbarScroll);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 992) {
            setIsOpen(false);
        }
    }, [router.pathname, router.locale]);

    const switchLanguage = (lan) => {
        if (router.pathname.includes("truck/")) {
            router.push(
                {
                    pathname: "/truck/[truck]",
                    query: {
                        truck: window.location.pathname.split("/").slice(-1)[0],
                    },
                },
                "/truck/[truck]",
                { locale: lan, scroll: false }
            );
        } else {
            router.push(router.pathname, router.pathname, { locale: lan, scroll: false });
        }
        setCookie("NEXT_LOCALE", lan, 365);
        if (router.locale !== lan) setlangtoast(true);
    };

    return (
        <>
            <nav className={`${navbarbg ? "topnav" : ""} animated fadeInDown`}>
                <div className="navbar__container">
                    <a className="navbar__logo" onClick={() => window.location.reload(false)}>
                        <MDBIcon icon="bus" />
                        <span>ContiBUS</span>
                    </a>
                    <div
                        className={`navbar__mobileicon`}
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        <MenuIcon className={`${isOpen ? "navbar__mobileicon__open" : ""}`} fontSize="large" />
                    </div>
                    {!isMobile && (
                        <ul className="navbar__menu">
                            {menuitems.map((item) => (
                                <li key={item.href + "navbar"} className={`${navbarbg ? "topnav__li" : ""}`}>
                                    <Link href={item.href} passHref>
                                        <a
                                            className={`${
                                                item.title.en === "Home"
                                                    ? router.pathname === "/" || ""
                                                        ? "active"
                                                        : ""
                                                    : item.title.en === "Offer request"
                                                    ? router.pathname === "/offer"
                                                        ? "active"
                                                        : ""
                                                    : item.title.en === "Our Trucks"
                                                    ? router.pathname.includes("truck")
                                                        ? "active"
                                                        : ""
                                                    : ""
                                            } navbar__link`}
                                        >
                                            {router.locale === "en" ? item.title.en : item.title.hu}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="navbar__btn">
                        <a href="https://kalandozas.hu/travels" target="_blank" rel="noopener noreferrer">
                            <MDBIcon icon="calendar-check" className="pr-1" />
                            {router.locale === "en" ? "Our buses" : "Autóbuszaink"}
                        </a>
                    </div>
                </div>
                <div className="navbar__language">
                    <img
                        width="30px"
                        src="/img/svgs/hu.svg"
                        className={router.locale === "hu" ? "flag activelanguage" : "flag notactivelang"}
                        id="huicon"
                        onClick={() => {
                            switchLanguage("hu");
                        }}
                        alt="Váltás magyar nyelvre zászló"
                    />
                    <img
                        width="30px"
                        src="/img/svgs/uk.svg"
                        className={router.locale === "en" ? "flag ml-2 activelanguage" : "flag ml-2 notactivelang"}
                        id="engicon"
                        onClick={() => {
                            switchLanguage("en");
                        }}
                        alt="Váltás angol nyelvre zászló"
                    />
                </div>
            </nav>
            {isMobile && (
                <aside className={`${isOpen ? "open" : "closed"}`}>
                    <div className="sidebar__icon">
                        <CloseIcon
                            fontSize="large"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        />
                    </div>
                    <div>
                        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            {menuitems.map((item) => (
                                <li key={item.href + "sidebar"}>
                                    <Link href={item.href} passHref>
                                        <a
                                            className={`${
                                                item.title.en === "Home"
                                                    ? router.pathname === "/"
                                                        ? "active"
                                                        : router.pathname === ""
                                                        ? "active"
                                                        : ""
                                                    : item.title.en === "Offer request"
                                                    ? router.pathname === "/offer"
                                                        ? "active"
                                                        : ""
                                                    : item.title.en === "Our Buses"
                                                    ? router.pathname.includes("bus")
                                                        ? "active"
                                                        : ""
                                                    : item.title.en === "Our Trucks"
                                                    ? router.pathname.includes("truck")
                                                        ? "active"
                                                        : ""
                                                    : ""
                                            } sidebar__link`}
                                        >
                                            {router.locale === "en" ? item.title.en : item.title.hu}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="sidebar__language">
                            <img
                                width="30px"
                                src="/img/svgs/hu.svg"
                                className={router.locale === "hu" ? "flag activelanguage" : "flag notactivelang"}
                                id="huicon"
                                onClick={() => {
                                    switchLanguage("hu");
                                }}
                                alt="Váltás magyar nyelvre zászló (mobil nézet)"
                            />
                            <img
                                width="30px"
                                src="/img/svgs/uk.svg"
                                className={router.locale === "en" ? "flag ml-2 activelanguage" : "flag ml-2 notactivelang"}
                                id="engicon"
                                onClick={() => {
                                    switchLanguage("en");
                                }}
                                alt="Váltás angol nyelvre zászló (mobil nézet)"
                            />
                        </div>

                        <div className="sidebar__btn font-weight-bold">
                            <a href="https://kalandozas.hu/travels" target="_blank" rel="noopener noreferrer">
                                <MDBIcon icon="calendar-check" className="pr-1" />
                                {router.locale === "en" ? "Our buses" : "Autóbuszaink"}
                            </a>
                        </div>
                    </div>
                </aside>
            )}
            <Snackbar
                autoHideDuration={3000}
                open={langtoast}
                onClose={(event, reason) => {
                    if (reason === "clickaway") {
                        return;
                    }
                    setlangtoast(false);
                }}
            >
                <SnackbarContent className="rounded" message={router.locale === "en" ? "Language set" : "Nyelv sikeresen beállítva"} />
            </Snackbar>
        </>
    );
};

export default Navbar;
