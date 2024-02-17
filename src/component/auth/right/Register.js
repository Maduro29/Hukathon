import { useState } from "react"
import {
    isValidEmail,
    isValidName,
    isValidPassword,
    isValidPhoneNumber,
} from "../../../services/auth/verification"
import "./Register.scss"
import { toast } from "react-hot-toast"
import { register } from "../../../services/auth/register"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateToken } from "../../../app/userSlice"

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            !email ||
            !password ||
            !name ||
            !phoneNumber ||
            !address ||
            !gender
        ) {
            setMessage("No field should be left blank!")
        } else if (!isValidEmail(email)) {
            setMessage("Wrong email format!")
        } else if (!isValidPassword(password)) {
            setMessage(
                "The password must be at least 8 characters long, and must contain at least 1 letter, number, and symbol!",
            )
        } else if (!isValidName(name)) {
            setMessage("Wrong name format!")
        } else if (!isValidPhoneNumber(phoneNumber)) {
            setMessage("Wrong phone number format!")
        } else {
            try {
                const data = await register(
                    email,
                    password,
                    name,
                    phoneNumber,
                    address,
                    gender,
                )
                if (data) {
                    toast.error("Login successfully!", {
                        style: {
                            border: "1px solid #713200",
                            padding: "10px",
                            color: "#5b86e5",
                            fontSize: "16px",
                        },
                        iconTheme: {
                            primary: "#5b86e5",
                            secondary: "#FFFAEE",
                        },
                        position: "top-right",
                    })
                    dispatch(updateToken(data.token))
                    navigate("/")
                }
            } catch (err) {
                setMessage("")
                toast.error("Error happens! Please try again!", {
                    style: {
                        border: "1px solid #713200",
                        padding: "10px",
                        color: "#5b86e5",
                        fontSize: "16px",
                    },
                    iconTheme: {
                        primary: "#5b86e5",
                        secondary: "#FFFAEE",
                    },
                    position: "top-right",
                })
            }
        }
    }

    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="register-input"
                ></input>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="register-input"
                ></input>
                <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="register-input"
                ></input>
                <input
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="register-input"
                ></input>
                <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="register-input"
                ></input>
                <select
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                >
                    <option value="">Choose gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input
                    type="submit"
                    value="Register"
                    className="register-submit"
                ></input>
                <span className="register-message">{message}</span>
            </form>
        </div>
    )
}

export default Register
