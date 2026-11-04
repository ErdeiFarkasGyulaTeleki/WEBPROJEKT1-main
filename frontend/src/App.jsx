import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import TermekLista from "./components/TermekLista";
import LoginForm from "./components/LoginForm";
import RegForm from "./components/RegForm";
import MultiForm from "./components/MultiForm";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegForm />} />
                    <Route path="/user" element={<UserForm />} />
                    <Route path="/products" element={<TermekLista />} />
                    <Route path="/multi-form" element={<MultiForm />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
