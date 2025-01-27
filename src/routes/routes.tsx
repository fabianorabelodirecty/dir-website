import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RouterManager = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default RouterManager;
