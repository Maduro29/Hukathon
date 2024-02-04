import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        func: "login",
    },
    reducers: {
        changeToRegister: (state) => {
            state.func = "register"
        },
        changeToLogin: (state) => {
            state.func = "login"
        },
    },
})

export const { changeToLogin, changeToRegister } = authSlice.actions

export const selectFunc = (state) => state.auth.func

export default authSlice.reducer
