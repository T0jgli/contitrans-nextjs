import { useState } from "react";
import { useDispatch } from "react-redux";

import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import { Fade as MuiFade, IconButton, Tooltip } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
const Fslightboxes = dynamic(() => import("../GlobalComponents/Fslightboxes"));
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { setsnackbar } from "../../lib/redux/reducers";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import EcoIcon from "@material-ui/icons/Eco";

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    loading: false,
};

const OneTruckBody = ({ thistruck }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [state, setstate] = useState(initialState);
    const [order, setorder] = useState(false);
    const [thispicture, setthispicture] = useState(0);
    const [lightbox, setlightbox] = useState({
        toggler: false,
        slide: 1,
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        setstate({ ...state, loading: true });

        axios({
            method: "POST",
            url: "/api/truckoffer",
            data: {
                ...state,
                truck: {
                    ...thistruck.fields,
                },
            },
        }).then((response) => {
            setstate(initialState);
            setorder(false);
            if (response.status == 200) {
                dispatch(
                    setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: "Sikeresen elküldve! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
                            en: "Successfully sent! We will contact you shortly.",
                        },
                    })
                );
            } else {
                dispatch(
                    setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: response.data.error,
                            en: response.data.error,
                        },
                    })
                );
            }
        });
    };

    return (
        <>
            {thistruck ? (
                <>
                    <Head>
                        <title>{thistruck.fields.truck} - ContiBus</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <meta property="og:image" content={`https://${thistruck.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`} />
                        <meta name="twitter:image" content={`https://${thistruck.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`} />
                        <meta property="og:url" content={`https://contibus.hu/truck/${thistruck.fields.id}`} />
                        <link rel="alternate" hrefLang="en" href={`https://contibus.hu/en/truck/${thistruck.fields.id}`} />
                        <link rel="alternate" hrefLang="hu" href={`https://contibus.hu/truck/${thistruck.fields.id}`} />
                    </Head>
                    <div className="onebus__container w-75 mx-auto my-5 pt-3">
                        <div className="row">
                            <div className="text-sm-right col text-center">
                                <Fade triggerOnce>
                                    <img
                                        alt={`${thistruck.fields.truck} kép`}
                                        src={`https://${thistruck.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`}
                                        style={{ cursor: "pointer", borderRadius: "1rem" }}
                                        onClick={() =>
                                            setlightbox({
                                                toggler: true,
                                                slide: thispicture,
                                            })
                                        }
                                        className="img img-rounded img-thumbnail buspict"
                                    />
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="mt-2 otherpictures mb-5 mb-md-0">
                                        {thistruck.fields.pictures.map((pict, i) => {
                                            if (i !== thispicture)
                                                return (
                                                    <img
                                                        alt={`${thistruck.fields.truck} kép (${i + 1})`}
                                                        style={{ borderRadius: "1rem" }}
                                                        key={`${thistruck.fields.truck} (${i + 1})`}
                                                        src={`https://${pict.fields.file.url}?&fm=webp&q=80`}
                                                        onClick={() => setthispicture(i)}
                                                        className="p-2"
                                                        width="100"
                                                    />
                                                );
                                            else return null;
                                        })}
                                    </div>
                                </Fade>
                            </div>
                            <div className="col">
                                <Fade triggerOnce>
                                    <div className="onebus__detailscontainer">
                                        <h2 className="text-center text-lg-left">{thistruck.fields.truck}</h2>
                                        <div className="onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4">
                                            <LineWeightIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">{router.locale === "en" ? "WEIGHT" : "ÖSSZSÚLY"}</p>
                                                <p className="grey-text h4 font-weight-bold pt-2 m-0 pl-4">
                                                    {thistruck.fields.weight.toLocaleString()} tonna
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4">
                                            <EcoIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">
                                                    {router.locale === "en" ? "ENVIRONMENTAL CLASSIFICATION" : "KÖRNYEZETVÉDELMI BESOROLÁS"}
                                                </p>
                                                <p className="grey-text h4 font-weight-bold pt-2 m-0 pl-4">{thistruck.fields.eurotype}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <Fade triggerOnce>
                            <div className="mt-5 pt-4 mx-auto row flex-center">
                                <div className="text-center col-lg-8">
                                    <p className="grey-text">{thistruck.fields.desc}</p>
                                </div>
                            </div>
                        </Fade>

                        <div className="flex-center row mt-5 pt-2 mx-auto">
                            <Fade direction="up">
                                <MDBBtn color="warning" onClick={() => setorder(true)} className="my-1 black-text roundedbtn font-weight-bold">
                                    {router.locale === "en" ? "Get an offer" : "Ajánlatot kérek"}
                                </MDBBtn>
                            </Fade>
                        </div>
                        {order && (
                            <div className="flex-center mt-2">
                                <Tooltip title={router.locale === "en" ? "Close" : "Bezárás"}>
                                    <IconButton onClick={() => setorder(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        )}
                        {order && (
                            <MuiFade in={order}>
                                <form
                                    onSubmit={handlesubmit}
                                    style={{ margin: "auto", maxWidth: "700px", boxShadow: "0 1px 3px rgb(0 0 0 / 20%)" }}
                                    className="rounded p-5"
                                >
                                    <div className="row" style={{ marginTop: "12px" }}>
                                        <div className="col-md-6">
                                            <MDBInput
                                                required
                                                value={state.name}
                                                onChange={(e) => setstate({ ...state, name: e.target.value })}
                                                label={router.locale === "en" ? "Name *" : "Név *"}
                                                name="Name"
                                                type="text"
                                            />
                                        </div>
                                        <div md="6" className="col-md-6">
                                            <MDBInput
                                                required
                                                value={state.email}
                                                onChange={(e) => setstate({ ...state, email: e.target.value })}
                                                label={router.locale === "en" ? "Email address *" : "Email cím *"}
                                                name="Email"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <MDBInput
                                                rows="7"
                                                required
                                                value={state.message}
                                                onChange={(e) => setstate({ ...state, message: e.target.value })}
                                                label={router.locale === "en" ? "Message *" : "Üzenet *"}
                                                name="Message"
                                                type="textarea"
                                            />
                                            <div className="text-center">
                                                <Tooltip enterDelay={500} title={router.locale === "en" ? "Send" : "Küldés"}>
                                                    <button
                                                        type="submit"
                                                        style={{ border: "none" }}
                                                        className="btn-lg warning-color roundedbtn truckofferbtn white-text mr-0 text-center"
                                                    >
                                                        {state.loading ? (
                                                            <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                                                <div className="spinner-border p-0 m-0" role="status">
                                                                    <span className="sr-only">Loading...</span>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <MDBIcon far icon="paper-plane" />
                                                        )}
                                                    </button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </MuiFade>
                        )}
                    </div>
                    <Fslightboxes name={thistruck.fields.truck} data={thistruck.fields.pictures} imgtoggler={lightbox} setimgtoggler={setlightbox} />
                </>
            ) : (
                <h2 className="flex-center text-center my-5">A keresett teherautó nem található!</h2>
            )}
        </>
    );
};

export default OneTruckBody;
