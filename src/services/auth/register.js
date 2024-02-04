import axios from "axios"

export const register = async (
    email,
    password,
    name,
    phoneNumber,
    address,
    gender,
) => {
    const response = await axios.post("", {
        email,
        password,
        name,
        phoneNumber,
        address,
        gender,
    })
    return response.data
}
