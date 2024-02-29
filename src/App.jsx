import Home from "./pages/Home";
import Work from "./pages/Work";
import { Route, Routes, Router, Outlet } from "react-router-dom";
import React from "react";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Workersignin from "./pages/Workersignin";
import Workersignup from "./pages/Workersignup";
import Workersignupotp from "./pages/Workersignupotp";




// const Layout = (
//   <>
//   <div className="relative w-screen h-screen">
//     <div className=""><Navbar /></div>
//     <Outlet />
//     <Footer />
//     </div>
//   </>
// );

function App() {
  return (
    <Routes>
      {/* <Route path="/home" element={Layout}> */}
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/workersignin" element={<Workersignin/>} />
        <Route path="/workersignup" element={<Workersignup/>} />
        {/* <Route path="/workersignup/verify-phone-number" element={<Workersignupotp/>} /> */}


        <Route path="/work" element={<Work />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
