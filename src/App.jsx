import Home from "./pages/Home";
import Work from "./pages/Work";
import Hire from "./pages/Hire";
import { Route, Routes, Router, Outlet } from "react-router-dom";
import React from "react";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Workersignin from "./pages/Workersignin";
import Workersignup from "./pages/Workersignup";
import Workersignupotp from "./pages/Workersignupotp";
import Category from "./pages/Category";


const Layout = (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>

      <Route path="/home" element={Layout}>
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/workersignin" element={<Workersignin/>} />
        <Route path="/workersignup" element={<Workersignup/>} />
        <Route path="/workersignup/verify-phone-number" element={<Workersignupotp/>} />
      </Route>
    </Routes>
  );
}

export default App;
