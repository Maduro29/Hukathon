import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: "",
        user: {},
    },
    reducers: {
        updateToken: (state, action) => {
            const { token } = action.payload
            state.token = token
        },
        removeToken: (state) => {
            state.token = ""
            state.user = {}
        },
        updateUser: (state, action) => {
            const { user } = action.payload
            state.user = user
        },
    },
})

export const { updateToken, removeToken, updateUser } = userSlice.actions

export const selectToken = (state) => state.user.token

export const selectUser = (state) => state.user.user

export default userSlice.reducer
