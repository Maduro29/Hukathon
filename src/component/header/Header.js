import Logo from "../logo/Logo"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeToLogin, changeToRegister } from "../../app/authSlice"
import { useSelector } from "react-redux"
import { removeToken, selectToken } from "../../app/userSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons"
import Notification from "./noti/Notification"
import { useState } from "react"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector(selectToken)
    const [showNoti, setShowNoti] = useState(false)

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

    const notis = {
        rest: 2,
        notiList: [
            {
                title: "Event 1",
                description: "Event started!",
                view: false,
            },
            {
                title: "Event 2",
                description: "Event started!",
                view: false,
            },
            {
                title: "Event 3",
                description: "Event started!",
                view: true,
            },
        ],
    }

    const goToSearch = (e) => {
        navigate("/search")
    }

    const toggleNoti = () => {
        setShowNoti(!showNoti)
    }

    return (
        <div className="header">
            <div className="header-nav">
                <button className="header-logo" onClick={(e) => goToHome(e)}>
                    <Logo />
                </button>
                {isLogin !== "" && (
                    <>
                        <button
                            className="header-search"
                            onClick={() => goToSearch()}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </>
                )}
            </div>
            <div className="header-auth">
                {isLogin !== "" ? (
                    <>
                        <button className="header-noti">
                            <FontAwesomeIcon
                                icon={faBell}
                                onClick={() => toggleNoti()}
                            />
                            <span className="header-noti-number">
                                {notis.rest}
                            </span>
                            <Notification
                                notis={notis}
                                showNoti={showNoti}
                                setShowNoti={setShowNoti}
                            />
                        </button>
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
