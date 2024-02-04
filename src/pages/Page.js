import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Auth from "./auth/Auth"
import "./Page.scss"
import { Toaster } from "react-hot-toast"

const Page = () => {
    return (
        <div className="page-overlay">
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/auth" element={<Auth />}></Route>
                </Routes>
                <Toaster />
            </div>
        </div>
    )
}

export default Page
