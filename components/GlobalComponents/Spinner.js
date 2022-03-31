import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
    return (
        <div className="m-5 pt-5" style={{ display: "grid", placeItems: "center", height: "100%" }}>
            <CircularProgress style={{ color: "grey" }} size={60} />
        </div>
    );
};

export default Spinner;
