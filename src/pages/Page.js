import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Auth from "./auth/Auth"

import "./Page.scss"

const Page = () => {
    return (
        <div className="page-overlay">
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/auth" element={<Auth />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Page
