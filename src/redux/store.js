import {configureStore} from "@reduxjs/toolkit";

import Modal from "./slices/Modal";

export default configureStore({
    reducer: {
        modal: Modal.reducer
    }
});