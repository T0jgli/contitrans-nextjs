import { MDBCardBody, MDBIcon, MDBInput } from "mdbreact";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setsnackbar } from "../../lib/redux/reducers";
import axios from "axios";
import { Tooltip } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    loading: false,
};

const Contact = () => {
    const dispatch = useDispatch();
    const [state, setstate] = useState(initialState);
    const { locale } = useRouter();

    const handlesubmit = (e) => {
        e.preventDefault();
        setstate({ ...state, loading: true });

        axios({
            method: "POST",
            url: "/api/contact",
            data: state,
        }).then((response) => {
            setstate(initialState);
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
        <div className="contact__div text-center py-5 container" id="contact">
            <Fade triggerOnce>
                <div className="rounded contact__card mb-2">
                    <div className="row">
                        <div className="col-lg-8">
                            <MDBCardBody>
                                <h3 className="mt-4">
                                    {" "}
                                    <MDBIcon icon="envelope" className="pr-2" />
                                    {locale === "en" ? "Write to us" : "Üzenet küldése"}
                                </h3>
                                <form onSubmit={handlesubmit}>
                                    <div className="row" style={{ marginTop: "12px" }}>
                                        <div className="col-md-6">
                                            <MDBInput
                                                required
                                                value={state.name}
                                                aria-label="Név"
                                                onChange={(e) => setstate({ ...state, name: e.target.value })}
                                                label={locale === "en" ? "Name *" : "Név *"}
                                                name="Name"
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <MDBInput
                                                required
                                                value={state.email}
                                                aria-label="Email"
                                                onChange={(e) => setstate({ ...state, email: e.target.value })}
                                                label={locale === "en" ? "Email address *" : "Email cím *"}
                                                name="Email"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <MDBInput
                                                value={state.subject}
                                                onChange={(e) => setstate({ ...state, subject: e.target.value })}
                                                label={locale === "en" ? "Subject" : "Tárgy"}
                                                name="Subject"
                                                aria-label="Tárgy"
                                                type="text"
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
                                                label={locale === "en" ? "Message *" : "Üzenet *"}
                                                aria-label="Üzenet"
                                                name="Message"
                                                type="textarea"
                                            />
                                            <Tooltip enterDelay={500} title={locale === "en" ? "Send" : "Küldés"}>
                                                <button type="submit" className="contact__submitbtn btn-lg warning-color white-text mr-0 text-center">
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
                                </form>
                            </MDBCardBody>
                        </div>
                        <div className="h-100 col-lg-4">
                            <MDBCardBody className="white-text h-100 rounded rightinformations">
                                <h3 className="my-4 pb-2">
                                    <MDBIcon icon="info-circle" className="pr-2" />
                                    {locale === "en" ? "Informations" : "Információk"}
                                </h3>
                                <ul className="text-lg-left list-unstyled ml-4">
                                    <li className="pb-2">
                                        <p>
                                            <MDBIcon icon="map-marker" className="pr-2 grey-text" />
                                            1088 Budapest, Szentkirályi utca 5{" "}
                                            <span className="grey-text pl-lg-3">
                                                {locale === "en" ? "(under reconstruction)" : "(felújítás alatt)"}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="pb-2">
                                        <p>
                                            <MDBIcon icon="map-marker-alt" className="pr-2 grey-text" />
                                            1075 Budapest, Síp utca 4.
                                        </p>
                                    </li>
                                    <li className="pb-2">
                                        <p>
                                            <MDBIcon icon="phone-alt" className="pr-2 grey-text" />+ 36 1 317-1256
                                        </p>
                                    </li>
                                    <li className="pb-2">
                                        <p>
                                            <MDBIcon icon="phone" className="pr-2 grey-text" />+ 36 30 934-9319
                                        </p>
                                    </li>
                                    <li className="pb-2">
                                        <p>
                                            <MDBIcon far icon="envelope" className="pr-2 grey-text" />
                                            contibus@contibus.hu
                                        </p>
                                    </li>
                                    <li className="pb-3">
                                        <p>
                                            <MDBIcon icon="envelope" className="pr-2 grey-text" />
                                            buszrendeles@contibus.hu
                                        </p>
                                    </li>
                                </ul>
                                <hr className="hr-light my-4" />
                                <ul className="list-inline text-center list-unstyled">
                                    <li className="list-inline-item">
                                        <a
                                            aria-label="Facebook link"
                                            href="https://www.facebook.com/Contibus-Neoline-432462590213055"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                            className="fa-lg socialicon"
                                        >
                                            <MDBIcon fab icon="facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            aria-label="Instagram link"
                                            href="https://www.instagram.com/contibus_hivatalos/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                            className="fa-lg socialicon"
                                        >
                                            <MDBIcon fab icon="instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </MDBCardBody>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
