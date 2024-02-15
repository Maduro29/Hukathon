import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Auth from "./auth/Auth"
import "./Page.scss"
import { Toaster } from "react-hot-toast"
import Place from "./place/Place"
import Header from "../component/header/Header"
import Search from "./search/Search"
import Event from "./event/Event"
import Chat from "./chat/Chat"
import Form from "./form/Form"

const Page = () => {
    return (
        <div className="page-overlay">
            <div className="page">
                <Header />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/auth" element={<Auth />}></Route>
                        <Route path="/place" element={<Place />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/event" element={<Event />}></Route>
                        <Route path="/chat" element={<Chat />}></Route>
                        <Route path="/form" element={<Form />}></Route>
                    </Routes>
                    <Toaster />
                </div>
            </div>
        </div>
    )
}

export default Page
