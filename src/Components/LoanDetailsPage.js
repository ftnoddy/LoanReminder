import React, { useState } from "react";
import axios from "axios";

const LoanDetailsPage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState(0);
  const [loanTermMonths, setLoanTermMonths] = useState(0); // Add this state
  const [interestRate, setInterestRate] = useState(0);
  const [repaymentFrequency, setRepaymentFrequency] = useState("");
  const [repaymentAmount, setRepaymentAmount] = useState(null);
  const [totalPayments, setTotalPayments] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleLoanTermYearsChange = (event) => {
    setLoanTermYears(event.target.value);
  };

  const handleLoanTermMonthsChange = (event) => {
    setLoanTermMonths(event.target.value);
  }; // Add this function

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleRepaymentFrequencyChange = (event) => {
    setRepaymentFrequency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loanData = {
      loanAmount,
      loanTermYears, // Include loan term years
      loanTermMonths, // Include loan term months
      interestRate,
      repaymentFrequency,
    };

    axios
      .post("http://localhost:3000/api/calculateLoan", loanData)
      .then((response) => {
        // Handle the response from the backend
        const responseData = response.data;
        // Set the calculated values from the backend response
        setRepaymentAmount(responseData.repaymentAmount);
        setTotalPayments(responseData.totalPayments);
        setTotalRepayment(responseData.totalRepayment);
        setTotalInterest(responseData.totalInterest);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="loan-details-container">
      <h1 className="hade">Loan Details</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="loanTermYears">Loan Term (Years):</label>
          <input
            className="input"
            type="number"
            value={loanTermYears}
            onChange={handleLoanTermYearsChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="loanTermMonths">Loan Term (Months):</label>
          <input
            className="input"
            type="number"
            value={loanTermMonths}
            onChange={handleLoanTermMonthsChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            className="input"
            type="number"
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="repaymentFrequency">Repayment Frequency:</label>
          <select
            className="input"
            value={repaymentFrequency}
            onChange={handleRepaymentFrequencyChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>
      {repaymentAmount !== null && (
        <div className="repayment-container">
          <div className="repayment-amount">
            <h2>Results:</h2>
            <p>
              Payment Every {repaymentFrequency}: ${repaymentAmount}
            </p>
            <p>
              Total of {totalPayments} Payments: ${totalRepayment}
            </p>
            <p>Total Interest: ${totalInterest}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanDetailsPage;
