import React, { useState } from "react";

const LoanDetailsPage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState(0);
  const [loanTermMonths, setLoanTermMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState("");
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
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleCompoundFrequencyChange = (event) => {
    setCompoundFrequency(event.target.value);
  };

  const handleRepaymentFrequencyChange = (event) => {
    setRepaymentFrequency(event.target.value);
  };  

  const handleSubmit = (event) => {
    event.preventDefault();

    const loanTermInMonths = loanTermYears * 12 + Number(loanTermMonths);
    const monthlyInterestRate = Number(interestRate) / 100 / 12;

    let repaymentPeriodInMonths;

    if (repaymentFrequency === "monthly") {
      repaymentPeriodInMonths = loanTermInMonths;
    } else if (repaymentFrequency === "weekly") {
      repaymentPeriodInMonths = loanTermInMonths * 4;
    } else if (repaymentFrequency === "yearly") {
      repaymentPeriodInMonths = loanTermInMonths / 12;
    }

    const exponent = -repaymentPeriodInMonths;

    const calculatedRepaymentAmount =
      loanAmount *
      (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, exponent)));

    setRepaymentAmount(calculatedRepaymentAmount.toFixed(2));

    const totalRepayment = calculatedRepaymentAmount * repaymentPeriodInMonths;
    const totalInterest = totalRepayment - loanAmount;

    setTotalPayments(repaymentPeriodInMonths);
    setTotalRepayment(totalRepayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  return (
    <div className="loan-details-container">
      <h1>Loan Details</h1>
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
          <label htmlFor="compoundFrequency">Compound Frequency:</label>
          <select
            className="input"
            value={compoundFrequency}
            onChange={handleCompoundFrequencyChange}
          >
            <option value="monthly">Monthly (APR)</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
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
      )}
    </div>
  );
};

export default LoanDetailsPage;
