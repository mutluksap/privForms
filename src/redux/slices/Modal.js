import {createSlice} from "@reduxjs/toolkit";

const Modal = createSlice({
   name: "modal",
    initialState: {
       open: false
    },
    reducers:{
       openModal: (state,action) => {
           state.open = action.payload;
       }
    }
});

export const {openModal} = Modal.actions
export default Modal