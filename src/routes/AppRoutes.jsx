import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/Register/Register";
import Discover from "../pages/Discover/Discover";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
