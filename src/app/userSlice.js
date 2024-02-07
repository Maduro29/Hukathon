import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: "",
    },
    reducers: {
        updateToken: (state, action) => {
            const { token } = action.payload
            state.token = token
        },
        removeToken: (state) => {
            state.token = ""
        },
    },
})

export const { updateToken, removeToken } = userSlice.actions

export const selectToken = (state) => state.user.token

export default userSlice.reducer
