import React, { useState } from "react";

const LoanDetailsPage = () => {
  const [userName, setUserName] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanType, setLoanType] = useState("student");
  const [interestRate, setInterestRate] = useState("4%");
  const [paymentFrequency, setPaymentFrequency] = useState("daily");
  const [repaymentAmount, setRepaymentAmount] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handlePaymentFrequencyChange = (event) => {
    setPaymentFrequency(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const calculateRepaymentAmount = () => {
    const calculatedAmount = loanAmount * 1.04; // Adding 4% interest
    setRepaymentAmount(calculatedAmount.toFixed(2)); // Fixed to 2 decimal places
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateRepaymentAmount();
  };

  return (
    <div className="loan-details-container">
    <div className="colorful-box">
      <h1>Loan Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="userName">User Name:</label>
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            className="input"
            type="number"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="loanType">Loan Type:</label>
          <select
            className="input"
            value={loanType}
            onChange={handleLoanTypeChange}
          >
            <option value="student">Student Loan</option>
            <option value="business">Business Loan</option>
            <option value="home">Home Loan</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="interestRate">Interest Rate:</label>
          <input
            className="input"
            type="number"
            value={interestRate}
            onChange={handleInterestRateChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="paymentFrequency">Payment Frequency:</label>
          <select
            className="input"
            value={paymentFrequency}
            onChange={handlePaymentFrequencyChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date:</label>
          <input
            className="input"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date:</label>
          <input
            className="input"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            required
          />
        </div>
        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>
      {repaymentAmount !== null && (
        <div className="repayment-amount">
          <p>Calculated Repayment Amount: ${repaymentAmount}</p>
        </div>
      )}
    </div>
    </div>
  );
};


export default LoanDetailsPage;
