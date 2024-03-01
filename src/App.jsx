import Home from "./pages/Home";
import Work from "./pages/Work";
import Hire from "./pages/Hire";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Jobs from "./pages/Jobs";
import Workersignin from "./pages/Workersignin";
import Workersignup from "./pages/Workersignup";
import Workersignupotp from "./pages/Workersignupotp";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:name" element={<Category />} />
      <Route path="/work" element={<Work />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/workersignin" element={<Workersignin />} />
      <Route path="/workersignup" element={<Workersignup />} />
      <Route
        path="/workersignup/verify-phone-number"
        element={<Workersignupotp />}
      />
    </Routes>
  );
}

export default App;
