import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { appReducer } from "./reducers";

const reducer = combineReducers({
    app: appReducer,
});

export const store = () => createStore(reducer);

export const wrapper = createWrapper(store);
