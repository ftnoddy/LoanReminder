import React from "react";


const Dashboard = () => {
  // Dummy data (replace with actual data from your backend)
  const repaymentAmount = "$500";
  const totalPayments = "24";
  const totalLoanAmount = "$10,000";
  const nextPaymentDate = "Aug 15, 2023";
  const nextPaymentAmount = "$500";

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-card">
        <h2>Total Loan Amount</h2>
        <p className="dashboard-value">{totalLoanAmount}</p>
      </div>
      <div className="dashboard-card">
        <h2>Next Payment</h2>
        <p className="dashboard-value">
          {nextPaymentDate} - {nextPaymentAmount}
        </p>
      </div>
      <div className="dashboard-card">
        <h2>Repayment Amount</h2>
        <p className="dashboard-value">{repaymentAmount}</p>
      </div>
      <div className="dashboard-card">
        <h2>Total Payments</h2>
        <p className="dashboard-value">{totalPayments}</p>
      </div>
    </div>
  );
};

export default Dashboard;

