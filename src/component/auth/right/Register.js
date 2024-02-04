import { useState } from "react"
import "./Register.scss"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")

    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form>
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
            </form>
        </div>
    )
}

export default Register
