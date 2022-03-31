import { useState } from "react";
import { MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCard, MDBCardImage } from "mdbreact";
import { Fade } from "react-awesome-reveal";

import gallery from "../../lib/gallery.json";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const Fslightboxes = dynamic(() => import("./Fslightboxes"));

const Gallery = () => {
    const router = useRouter();
    const [galleryopen, setgalleryopen] = useState({
        toggler: false,
        slide: 0,
    });

    const galleryfill = (id) => {
        let galleryimages = [];
        for (let index = id; index < id + 4; index++) {
            galleryimages.push(
                <div key={index} md="3" className="my-2 p-0 col-md-3 kartya">
                    <MDBCard style={{ boxShadow: "none" }} className="" onClick={() => setgalleryopen({ toggler: true, slide: index })}>
                        <MDBCardImage
                            waves
                            className={`img-fluid ${
                                (index + 1) % 4 === 1 ? "roundedimage1" : (index + 1) % 4 === 0 && "roundedimage2"
                            } roundedimagemobile mx-auto`}
                            alt={`Galéria ${index}`}
                            src={gallery[index]}
                        />
                        <MDBMask className="" overlay="black-light" />
                    </MDBCard>
                </div>
            );
        }
        return galleryimages;
    };

    return (
        <>
            <div id="gallerycontainer" className="pt-5 row pb-4 mx-auto w-75">
                <div className="col">
                    <Fade triggerOnce direction="down">
                        <h2 className="pb-2 mb-0 text-center" id="gallerytext">
                            {router.locale === "en" ? "Gallery" : "Galéria"}
                        </h2>
                    </Fade>
                    <Fade triggerOnce>
                        <MDBCarousel
                            activeItem={1}
                            length={4}
                            showControls={true}
                            showIndicators={false}
                            slide
                            className="carousel slide carousel-multi-item carousel-multi-item-2"
                            data-ride="carousel"
                            multiItem
                        >
                            <MDBCarouselInner className="carousel-inner">
                                <MDBCarouselItem className="carousel-item" itemId="1">
                                    {galleryfill(0)}
                                </MDBCarouselItem>
                                <MDBCarouselItem className="carousel-item" itemId="2">
                                    {galleryfill(4)}
                                </MDBCarouselItem>
                                <MDBCarouselItem className="carousel-item" itemId="3">
                                    {galleryfill(8)}
                                </MDBCarouselItem>
                                <MDBCarouselItem className="carousel-item" itemId="4">
                                    {galleryfill(12)}
                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </Fade>
                </div>
            </div>
            <Fslightboxes gallery data={gallery} imgtoggler={galleryopen} setimgtoggler={setgalleryopen} />
        </>
    );
};

export default Gallery;
