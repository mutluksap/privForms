import {createSlice} from "@reduxjs/toolkit";

const users = createSlice({
    name: users,
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users = state.users.push(action.payload);
        }
    }
})