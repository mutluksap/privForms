import {configureStore} from "@reduxjs/toolkit";

import reducers from "./reducers";

const initialState = {
    modal: false
}

export default configureStore({ reducer: reducers, preloadedState: initialState});