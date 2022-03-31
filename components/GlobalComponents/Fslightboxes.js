import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";

const Fslightboxes = ({ imgtoggler, setimgtoggler, data, name, gallery }) => {
    const [imgs, setimgs] = useState([]);
    useEffect(() => {
        if (gallery) {
            setimgs(data);
        } else if (name) {
            if (data.length > 0) setimgs(data.map((pict) => `https://${pict.fields.file.url}?&fm=webp&q=80`));
        } else {
            setimgs(
                data &&
                    Array.from({ length: data.length }, (_, i) => {
                        return `http:${data[i].fields.pictures[0].fields.file.url}?&fm=webp&q=80`;
                    })
            );
        }
    }, [data, name]);
    return (
        <>
            {imgtoggler.toggler && (
                <Lightbox
                    mainSrc={imgs[imgtoggler.slide]}
                    nextSrc={imgs[(imgtoggler.slide + 1) % data.length]}
                    prevSrc={imgs[(imgtoggler.slide + data.length - 1) % data.length]}
                    onCloseRequest={() => {
                        setimgtoggler({
                            toggler: false,
                            slide: 0,
                        });
                    }}
                    onMovePrevRequest={() =>
                        setimgtoggler({
                            toggler: imgtoggler.toggler,
                            slide: (imgtoggler.slide + data.length - 1) % data.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        setimgtoggler({
                            toggler: imgtoggler.toggler,
                            slide: (imgtoggler.slide + 1) % data.length,
                        })
                    }
                    imageCaption={!gallery && imgtoggler.slide + 1 + "/" + data.length}
                    imageTitle={!gallery && !Boolean(name) ? data[imgtoggler.slide].fields.bus : name}
                />
            )}
        </>
    );
};

export default Fslightboxes;
