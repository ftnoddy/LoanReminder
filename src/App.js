import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

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
  } else if (currentPath === "/footer") {
    content = <Footer />;
  } else {
    content = <Home />;
  }

  return (
<Router>
    <div className="app">
      <button className="toggle-button" onClick={handleToggle}>
        {showLogin ? "Sign Up" : "Log In"}
      </button>
      <Navbar onNavigation={handleNavigation} />
      {content}
    </div>
</Router>
  );
};

export default App;
