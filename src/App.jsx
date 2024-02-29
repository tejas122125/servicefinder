import Home from "./pages/Home";
import Work from "./pages/Work";
import { Route, Routes, Router, Outlet } from "react-router-dom";
import React from "react";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <Route path="/" element={Layout}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Outlet />}>
          <Route index element={<Jobs />} />
          <Route path="/jobs/:q" element={<Category />} />
        </Route>
        <Route path="/work" element={<Work />} />
        {/* <Route path="/workersignin" element={<Workersignin />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
