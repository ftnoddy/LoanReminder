import React, { useState } from "react";

const LoanDetailsPage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  // Add more state variables for other loan details

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle saving the loan details here
  };

  return (
    <div className="loan-details-page">
      <h1>Enter Your Loan Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        {/* Add more input fields for other loan details */}
        <button type="submit">Save Loan Details</button>
      </form>
    </div>
  );
};

export default LoanDetailsPage;
