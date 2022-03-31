import { MDBIcon } from "mdbreact";

import ScrolltoTop from "react-scroll-up";

const Scrolltopbutton = () => {
    return (
        <ScrolltoTop showUnder={typeof window !== "undefined" ? window.innerHeight - 100 : 0} duration={1000}>
            <p className="rounded" id="scrolltopbutton">
                <MDBIcon icon="arrow-up" />
            </p>
        </ScrolltoTop>
    );
};

export default Scrolltopbutton;
