// Form/index.js

// Import the necessary dependences and styles
import React, { useState, useEffect } from 'react';
import Grid from "../Grid";
import * as Styles from "./styles";


// Define the Form component
const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  // State variables to track input values and expense type
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(true);

  // Function to generate a unique transaction ID
  const generateID = () => Math.round(Math.random() * 1000);

  // Function to handle saving the form data as a new transaction
  const handleSave = () => {
    // Validate input fields
    if (!desc || !amount) {
      alert("Enter the description and the value!");
      return;
    } else if (amount < 1) {
      alert("Please enter a positive value!");
      return;
    }

    // Create a new transaction object 
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    // Call handleAdd Function to add the new transaction
    handleAdd(transaction);

    // Clear input fields after saving
    setDesc("");
    setAmount("");
  };

  // Function to handle deleting a transaction by its ID
  const handleDelete = (ID) => {
    // Filter out the transaction with the given ID
    const newArray = transactionsList.filter((transaction) => transaction.id !== ID);

    // Update the transactionsList state and local storage
    setTransactionsList(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  // Use useEffect to observe changes in transactionsList and trigger a re-render
  useEffect(() => {
    // Additional logic here (if needed) when transactionsList changes
  }, [transactionsList]);

  // Render the Form component
  return (
    <>
      <Styles.Container>
        <Styles.InputContent>
          <Styles.Label>Description</Styles.Label>
          <Styles.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </Styles.InputContent>
        <Styles.InputContent>
          <Styles.Label>Value</Styles.Label>
          <Styles.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Styles.InputContent>
        <Styles.RadioGroup>
          <Styles.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Styles.Label htmlFor="rIncome">Entry</Styles.Label>
          <Styles.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Styles.Label htmlFor="rExpenses">Money out</Styles.Label>
        </Styles.RadioGroup>
        <Styles.Button onClick={handleSave}>Add</Styles.Button>
      </Styles.Container>
      <Grid items={transactionsList} setItems={setTransactionsList} handleDelete={handleDelete} />
    </>
  );
};

// Export the Form component
export default Form;
