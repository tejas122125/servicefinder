import Home from "./pages/Home";
import Work from "./pages/Work";
import Hire from "./pages/Hire";
import { Route, Routes, Router, Outlet } from "react-router-dom";
import React from "react";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Workersignin from "./pages/Workersignin";
import Workersignup from "./pages/Workersignup";
import Workersignupotp from "./pages/Workersignupotp";



=======
import Category from "./pages/Category";
>>>>>>> 189bd32ead7df43a36614679c15e6ac6d2472c47

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
<<<<<<< HEAD
      {/* <Route path="/home" element={Layout}> */}
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/workersignin" element={<Workersignin/>} />
        <Route path="/workersignup" element={<Workersignup/>} />
        {/* <Route path="/workersignup/verify-phone-number" element={<Workersignupotp/>} /> */}


=======
      <Route path="/" element={Layout}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Outlet />}>
          <Route index element={<Jobs />} />
          <Route path="/jobs/:q" element={<Category />} />
        </Route>
>>>>>>> 189bd32ead7df43a36614679c15e6ac6d2472c47
        <Route path="/work" element={<Work />} />
        {/* <Route path="/workersignin" element={<Workersignin />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
