import dynamic from "next/dynamic";

const Cardbodys = dynamic(() => import("./Cardbodys"));

const Carddeck = ({ idd, item, nextitem, nextnextitem, what, length, itemid }) => {
    return (
        <>
            {what === "Table" ? (
                <>
                    {itemid === length ? (
                        itemid % 3 === 1 ? (
                            <div className="card-deck mt-lg-4 mt-2 pt-lg-3 pt-2" id={what !== "Table" ? "deckmuzeum" + idd : "deck" + idd}>
                                <Cardbodys item={item} what={what} />
                                <Cardbodys />
                                <Cardbodys />
                            </div>
                        ) : (
                            itemid % 3 ===
                            2(
                                <div className="card-deck mt-lg-4 mt-2 pt-lg-3 pt-2" id={what !== "Table" ? "deckmuzeum" + idd : "deck" + idd}>
                                    <Cardbodys item={item} what={what} />
                                    <Cardbodys item={nextitem} what={what} />
                                    <Cardbodys />
                                </div>
                            )
                        )
                    ) : (
                        <div className="card-deck mt-lg-4 mt-2 pt-lg-3 pt-2" id={what !== "Table" ? "deckmuzeum" + idd : "deck" + idd}>
                            <Cardbodys item={item} what={what} />
                            <Cardbodys item={nextitem} what={what} />
                            <Cardbodys item={nextnextitem} what={what} />
                        </div>
                    )}
                </>
            ) : (
                <div className="card-deck mt-lg-4 mt-2 pt-lg-3 pt-2" id={what !== "Table" ? "deckmuzeum" + idd : "deck" + idd}>
                    <Cardbodys item={item} what={what} />
                    <Cardbodys item={nextitem} what={what} />
                </div>
            )}
        </>
    );
};

export default Carddeck;
