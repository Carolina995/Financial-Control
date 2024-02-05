// Import necessary dependencies and styles
import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global"; // Import global styles
import Header from "./components/Header"; // Import Header component
import Resume from "./components/Resume"; // Import Resume component
import Form from "./components/Form"; // Import Form component

// Define the main App component
const App = () => {
  // Retrieve data from localStorage
  const data = localStorage.getItem("transactions");

  // State for managing the list of transactions
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  // State for tracking income, expense, and total
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect to calculate income, expense, and total when transactionsList changes
  useEffect(() => {
    // Separate amounts for income and expense
    const amountExpense = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    // Calculate total income and expense
    const expenseTotal = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const incomeTotal = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    // Calculate the overall total and format the values
    const totalAmount = Math.abs(incomeTotal - expenseTotal).toFixed(2);

    // Set state variables with formatted values
    setIncome(`€ ${incomeTotal}`);
    setExpense(`€ ${expenseTotal}`);
    setTotal(`${Number(incomeTotal) < Number(expenseTotal) ? "-" : ""}€ ${totalAmount}`);
  }, [transactionsList]);

  // Function to handle adding a new transaction
  const handleAdd = (transaction) => {
    // Create a new array of transactions with the added transaction
    const newArrayTransactions = [...transactionsList, transaction];

    // Update the transactionsList state
    setTransactionsList(newArrayTransactions);

    // Update localStorage with the new array of transactions
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  // Render the components and global styles
  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionList={setTransactionsList} // Fix typo: setTransactionsList
      />
      <GlobalStyle />
    </>
  );
};

// Export the App component
export default App;
