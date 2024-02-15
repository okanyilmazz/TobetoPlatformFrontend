import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";

const initialState: any = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
};

const userSlice = createSlice({
    name: "user",
<<<<<<< HEAD
    initialState: initialState,
=======
    initialState,
>>>>>>> master
    reducers: {
        getUserInfo: (state) => {
            const user = authService.getUserInfo();
            state.user = user;
        },
        removeUserInfo: (state: any) => {
            state.user = {};
        }
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;