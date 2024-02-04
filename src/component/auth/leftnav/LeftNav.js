import Logo from "../../logo/Logo"

import "./LeftNav.scss"

import { useDispatch, useSelector } from "react-redux"
import {
    changeToLogin,
    changeToRegister,
    selectFunc,
} from "../../../app/authSlice"

const LeftNav = () => {
    const dispatch = useDispatch()

    const action = useSelector(selectFunc)

    return (
        <div className="leftnav">
            <span>
                Welcome to <Logo></Logo> <br></br>
            </span>
            <div className="leftnav-box">
                <span
                    className={
                        "leftnav-button" +
                        " " +
                        (action === "login" ? "leftnav-active" : "")
                    }
                    onClick={() => {
                        dispatch(changeToLogin())
                    }}
                >
                    Login
                </span>{" "}
                <br></br>
                <span
                    className={
                        "leftnav-button" +
                        " " +
                        (action === "register" ? "leftnav-active" : "")
                    }
                    onClick={() => {
                        dispatch(changeToRegister())
                    }}
                >
                    Register
                </span>
            </div>
        </div>
    )
}

export default LeftNav
