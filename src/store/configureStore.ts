import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
    loading: loadingReducer,
    auth: authReducer
});

export const globalStore = configureStore({
    reducer: rootReducer,
});