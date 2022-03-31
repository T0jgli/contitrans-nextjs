import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { setsnackbar } from "../../lib/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Snackbars = () => {
    const dispatch = useDispatch();

    const { locale } = useRouter();
    const snackbaropen = useSelector((state) => state.app.snackbar);
    return (
        <Snackbar
            open={snackbaropen?.open}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            autoHideDuration={3500}
            onClose={(event, reason) => {
                if (reason === "clickaway") {
                    return;
                }
                dispatch(setsnackbar({ snackbar: { ...snackbaropen, open: false } }));
            }}
        >
            <MuiAlert
                elevation={5}
                variant="filled"
                onClose={(event, reason) => {
                    if (reason === "clickaway") {
                        return;
                    }
                    dispatch(setsnackbar({ snackbar: { ...snackbaropen, open: false } }));
                }}
                severity={snackbaropen?.type}
                className="rounded"
            >
                {locale === "en" ? snackbaropen?.en : snackbaropen?.hu}
            </MuiAlert>
        </Snackbar>
    );
};

export default Snackbars;
