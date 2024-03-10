import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#FCF9F2]">
      <Router>
        <Navbar windowWidth={windowWidth} />
        <Routes>
          <Route path="/" element={<Home windowWidth={windowWidth} />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/detail"
            element={<Detail windowWidth={windowWidth} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
