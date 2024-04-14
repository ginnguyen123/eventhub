import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";

// obj chứa các reducer
const reducers = {
    authReducer
}

const store = configureStore({
    reducer: reducers
})

export default store
