import { useSelector } from "react-redux"
import { selectFunc } from "../../app/authSlice"
import LeftNav from "../../component/auth/leftnav/LeftNav"
import Login from "../../component/auth/right/Login"
import Register from "../../component/auth/right/Register"

import "./Auth.scss"

const Auth = () => {
    const action = useSelector(selectFunc)

    return (
        <div className="auth">
            <LeftNav />
            <div className="auth-box">
                {action === "login" ? <Login /> : <Register />}
            </div>
        </div>
    )
}

export default Auth
