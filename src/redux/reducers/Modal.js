import {createSlice} from "@reduxjs/toolkit";

const Modal = createSlice({
   name: "modal",
    initialState: {},
    reducers:{
       openModal: (state,action) => {
           console.log(action.payload)
           state.open = action.payload;
       }
    }
});

export const {openModal} = Modal.actions
export default Modal.reducer