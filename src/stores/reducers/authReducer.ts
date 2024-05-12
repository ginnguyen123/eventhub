import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    id: string,
    email: string,
    token: string,
    username: string
}

const initialState: AuthState = {
    id: '',
    email: '',
    token: '',
    username: ''
}

const authSlice = createSlice({
    name: 'authReducer',
    initialState: {
        authData: initialState
    },
    reducers: {
        addAuth: (
            state,
            action
        ) => {
            state.authData = action.payload
        }
    }
})

export const authReducer = authSlice.reducer

export const authSelector = (state: any) => state.authReducer.authData

export const {
    addAuth
} = authSlice.actions