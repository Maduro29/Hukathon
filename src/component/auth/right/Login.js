import { useState } from "react"
import "./Login.scss"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form>
                <input
                    type="email"
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
            </form>
        </div>
    )
}

export default Login
