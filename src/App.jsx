import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./LayOuts/LayOut";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Verify from "./pages/Auth/Verify";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/DashBoard/Dashboard";
import DashboardLayout from "./LayOuts/DashboardLayout";
import Categorise from "./pages/DashBoard/Categorise/Categorise";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/categorise" element={<Categorise />} />
        </Route>

        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
