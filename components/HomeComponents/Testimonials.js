import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
const Testimonials = () => {
    const router = useRouter();

    return (
        <>
            <div className="testimonials container">
                <Fade triggerOnce>
                    <h2 className="text-center my-5 pt-3">{router.locale === "en" ? "Our clients said" : "Az ügyfeleink mondták"}</h2>
                </Fade>
                <Fade triggerOnce>
                    <MDBCarousel interval={false} activeItem={1} slide length={4} showControls={false} showIndicators={true}>
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1" className="test">
                                <p> Megbízható, korrekt szolgáltatást nyújtanak! </p>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2" className="test">
                                <p>🚌 Az utazás egy élmény a kényelmes autóbuszokkal 🥰</p>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3" className="test">
                                <p>Good service @ lower price. More frequency with skilled drivers and buses.</p>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4" className="test">
                                <p>🚚 Szuper jó tehergépjárművek, tapasztalt gépkocsivezetők. 🚛</p>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </Fade>
            </div>
        </>
    );
};

export default Testimonials;
