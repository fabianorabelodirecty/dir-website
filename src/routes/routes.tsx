import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Trainings from "../pages/Trainings";

const RouterManager = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services/:service" element={<Services />} />
            <Route path="/products/:product" element={<Products />} />
            <Route path="/trainings/:training" element={<Trainings />} />
        </Routes>
    );
};

export default RouterManager;
