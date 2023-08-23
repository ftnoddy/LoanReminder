import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import LoanDetailsPage from "./Components/LoanDetailsPage";
import Dashboard from "./Components/Dashboard";
import "./App.css";

const App = () => {
  const [currentPath, setCurrentPath] = useState("/");

  const handleNavigation = (path) => {
    setCurrentPath(path);
  };

  let content = null;

  if (currentPath === "/signup") {
    content = <SignUp />;
  } else if (currentPath === "/login") {
    content = <Login />;
  } else if (currentPath === "/about") {
    content = <About />;
  } else if (currentPath === "/contact") {
    content = <Contact />;
  } else if (currentPath === "/loan-details") {
    content = <LoanDetailsPage />;
  } else {
    content = <Home />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar onNavigation={handleNavigation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loan-details" element={<LoanDetailsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
