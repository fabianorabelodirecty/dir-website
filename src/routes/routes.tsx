import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Trainings from "../pages/Trainings";
import About from "../pages/About";
import Contact from "../pages/Contact";

const RouterManager = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services/:service" element={<Services />} />
            <Route path="/products/:product" element={<Products />} />
            <Route path="/trainings/:training" element={<Trainings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default RouterManager;
