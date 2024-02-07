import { useSelector } from "react-redux"
import { selectFunc } from "../../app/authSlice"
import LeftNav from "../../component/auth/leftnav/LeftNav"
import Login from "../../component/auth/right/Login"
import Register from "../../component/auth/right/Register"
import { useNavigate } from "react-router-dom"

import "./Auth.scss"

const Auth = () => {
    const action = useSelector(selectFunc)
    const navigate = useNavigate()

    const backToHome = () => {
        navigate("/")
    }

    return (
        <div className="auth">
            <LeftNav />
            <div className="auth-box">
                <button className="auth-back" onClick={() => backToHome()}>
                    Back To Home Page
                </button>
                {action === "login" ? <Login /> : <Register />}
            </div>
        </div>
    )
}

export default Auth
