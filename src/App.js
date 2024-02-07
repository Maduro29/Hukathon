import "./App.scss"
import Page from "./pages/Page"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./app/store"

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Page />
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App
