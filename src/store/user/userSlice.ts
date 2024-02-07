import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";

const getInitialState = () => {
    return {
        user: {}
    };
};

const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
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