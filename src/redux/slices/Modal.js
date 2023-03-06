import {createSlice} from "@reduxjs/toolkit";

const Modal = createSlice({
   name: "modal",
    initialState: {
       open: false
    },
    reducers:{
       openModal: (state) => {
           state.open = !state.open;
       }
    }
});

export const {openModal} = Modal.actions
export default Modal