import { useState } from "react"
import "./Login.scss"
import { isValidEmail } from "../../../services/auth/verification"
import { toast } from "react-hot-toast"
import { login } from "../../../services/auth/login"
import { useDispatch } from "react-redux"
import { updateToken } from "../../../app/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setMessage("No field should be left blank!")
        } else if (!isValidEmail(email)) {
            setMessage("Wrong email format!")
        } else {
            try {
                const data = await login(email, password)
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
        <div className="login">
            <span className="login-title">Login</span>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="login-input"
                ></input>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="login-input"
                ></input>
                <input
                    type="submit"
                    value="Login"
                    className="login-submit"
                ></input>
                <span className="login-message">{message}</span>
            </form>
        </div>
    )
}

export default Login
