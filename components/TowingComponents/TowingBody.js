import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import { MDBCard, MDBCardImage, MDBCol, MDBMask, MDBRow } from "mdbreact";

const Busesbody = () => {
    const { locale } = useRouter();
    return (
        <>
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <div className="text-center py-4 main mb-5 busesothers">
                <div className="container">
                    <Fade triggerOnce>
                        <section>
                            <h3 className="py-3">{locale === "en" ? "Other informations:" : "Egyéb tudnivalók:"}</h3>
                            {/* <p className="font-weight-bolder">
                                {locale === "en"
                                    ? "Domestic passenger transport is subject to 27% VAT, international passenger transport is subject to 0% VAT. A minimum of 250 km per day, a minimum of 4 hours must be paid for hourly billing."
                                    : "Belföldi személyszállítást 27% ÁFA terheli, nemzetközi személyszállítást 0%-os. Napi minimum 250 km, óradíjas elszámolásnál minimum 4 óra fizetendő."}
                            </p>
                            <p>
                                {locale === "en"
                                    ? "In addition to the indicated kilometer or hourly rate, VAT, tolls, crossing fees, city tickets, parking and a daily fee for drivers must be paid."
                                    : "A feltüntetett kilóméterdíjon, vagy óradíjon felül áfát, autópályadíjakat, átkelő díjakat, városbelépőket, parkolásokat, és a gépkocsivezetők részére napidíjat kell fizetni."}
                                {locale === "en"
                                    ? " The accommodation of the driver(s) is provided by the customer, the amount of the daily fee varies by road types."
                                    : " Gépkocsivezető(-k) szállásáról a megrendelő gondoskodik, a napidíj összege úttípusonként változik."}
                                {locale === "en"
                                    ? " The drivers should rest 9 hours or more."
                                    : " A gépkocsivezetők napi pihenőideje semmilyen körülmények között sem lehet kevesebb kilenc egymást követő óránál."}
                                {locale === "en"
                                    ? " We provide preliminary information on tolls, ferry costs and parking."
                                    : " Autópályadíjakról, kompköltségekről, parkolásról előzetes tájékoztatást adunk."}
                            </p>
                            <p className="font-weight-bolder m-0 p-0">
                                {locale === "en"
                                    ? "In case of regular order we provide a discount!"
                                    : "Rendszeres megrendelés esetén kedvezményt biztosítunk!"}
                            </p>
                            <p>
                                {locale === "en"
                                    ? "Orders can be placed in person at our office, by letter, fax, e-mail or phone."
                                    : "Megrendeléseket személyesen irodánkban, levélben, faxon, e-mailben fogadunk vagy ügyeleti telefonszámunkon várjuk hívását."}
                            </p>
                            <p>
                                {locale === "en"
                                    ? "For objects and values forgotten on the bus during the trips we do not take responsibility. We keep the found stuffs for 1 month."
                                    : "Az utazások alatt az autóbuszon felejtett tárgyakért, értékekért felelősséget nem tudunk vállalni. A talált tárgyakat irodánk 1 hónapig őrzi."}
                            </p> */}
                            xx
                        </section>
                    </Fade>
                </div>

                <MDBCol>
                    <img style={{ verticalAlign: "middle" }} className={`img-fluid mx-1`} alt={`Towing 1 `} src="/img/towing/1.jpg" />
                    <img style={{ verticalAlign: "middle" }} className={`img-fluid mx-1`} alt={`Towing 1 `} src="/img/towing/2.jpg" />
                    <img style={{ verticalAlign: "middle" }} className={`img-fluid mx-1`} alt={`Towing 1 `} src="/img/towing/3.jpg" />
                    <img style={{ verticalAlign: "middle" }} className={`img-fluid mx-1`} alt={`Towing 1 `} src="/img/towing/4.jpg" />
                    <img style={{ verticalAlign: "middle" }} className={`img-fluid mx-1`} alt={`Towing 1 `} src="/img/towing/5.jpg" />
                </MDBCol>
                <div style={{ display: "flex", flexDirection: "column" }}></div>
            </div>
        </>
    );
};

export default Busesbody;
