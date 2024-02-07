import Logo from "../logo/Logo"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeToLogin, changeToRegister } from "../../app/authSlice"
import { useSelector } from "react-redux"
import { removeToken, selectToken } from "../../app/userSlice"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector(selectToken)

    const goToHome = () => {
        navigate("/")
    }

    const goToLogin = () => {
        dispatch(changeToLogin())
        navigate("/auth")
    }

    const goToRegister = () => {
        dispatch(changeToRegister())
        navigate("/auth")
    }

    const logout = () => {
        dispatch(removeToken())
        navigate("/")
    }

    return (
        <div className="header">
            <div className="header-nav">
                <button className="header-logo" onClick={() => goToHome()}>
                    <Logo />
                </button>
                {isLogin !== "" && (
                    <>
                        <button className="header-search">Search</button>
                    </>
                )}
            </div>
            <div className="header-auth">
                {isLogin !== "" ? (
                    <>
                        <button
                            className="header-logout"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="header-login"
                            onClick={() => goToLogin()}
                        >
                            Login
                        </button>
                        <button
                            className="header-register"
                            onClick={() => goToRegister()}
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header
