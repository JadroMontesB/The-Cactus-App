import "./App.css";

import NavBar from "./layouts/navBar";
import Footer from "./layouts/footer";
import HomePage from "./components/home";
import Menu from "./components/menu";
import Online_Shop from "./components/online_shop";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route
                        path="/online_shop"
                        element={<Online_Shop />}
                    ></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
