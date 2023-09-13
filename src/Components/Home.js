import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Contact from "./Contact";
import About from "./About";


const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="animated-text">
        <h1>Welcome to Loan Reminder App!</h1>
        <p>Your friendly reminder for managing loans.</p>
      </div>
      <Link to="/loan-details">
        <button className="loan-details-button">Enter Your Loan Details</button>
      </Link>
      <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Loan Reminder App. All rights reserved.</p>
      </div>
    </footer>
    </div>
    </>
  );
};

export default Home;
