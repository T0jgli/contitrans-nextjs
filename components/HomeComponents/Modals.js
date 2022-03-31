import { MDBBtn, MDBModal, MDBModalBody, MDBCard, MDBCardFooter, MDBModalHeader } from "mdbreact";
import ReactGA from "react-ga";
import { useRouter } from "next/router";

const Modals = ({ modalsopen, setmodalsopen }) => {
    const { locale } = useRouter();
    return (
        <>
            <MDBModal
                cascading
                modalStyle={modalsopen?.style}
                isOpen={modalsopen?.open}
                toggle={() => {
                    setmodalsopen({ ...modalsopen, open: false });
                    ReactGA.pageview(window.location.pathname);
                }}
                size="lg"
                className="rounded"
            >
                <MDBModalHeader
                    className="rounded"
                    titleClass="heading lead font-weight-bolder"
                    toggle={() => {
                        setmodalsopen({ ...modalsopen, open: false });
                        ReactGA.pageview(window.location.pathname);
                    }}
                >
                    {locale === "en" ? modalsopen?.title.en : modalsopen?.title.hu}
                </MDBModalHeader>
                <MDBModalBody className="p-0">{modalsopen?.details}</MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn
                            color={modalsopen?.style}
                            outline
                            className="float-right roundedbtn"
                            onClick={() => {
                                setmodalsopen({ ...modalsopen, open: false });
                                ReactGA.pageview(window.location.pathname);
                            }}
                        >
                            {locale === "en" ? "Close" : "Bezárás"}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    );
};

export default Modals;
