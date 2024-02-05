// Grid/index.js

// Import the necessary dependences and styles
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import GridItem from "../GridItem"; 
import * as C from "./styles";

// Define Grid component
const Grid = ({ items, setItems }) => {
  // State to trigger a page reload if necessary
  const [shouldReload, setShouldReload] = useState(false);

  console.log("setItems type:", typeof setItems);

  // useEffect to reload the page if shouldReload is true
  useEffect(() => {
    if (shouldReload) {
      // Force a page reload only if shouldReload is true
      window.location.reload();
    }
  }, [shouldReload]);

  // Function to handle deletion of transaction by its ID
  const onDelete = (ID) => {
    console.log(`Deleting item with ID:`, ID);

    // Create a new array excluding the transaction specified ID
    const newArray = items.filter((transaction) => transaction.id !== ID);
    console.log("New Array:", newArray);

    // Check if setItems is defined and is a function before calling it
    if (setItems && typeof setItems === "function") {
      setItems(newArray);
      console.log("setItems called successfully");
    } else {
      console.error("setItems is not defined or is not a function");
    }

    // Update local storage with the new array of transactions
    localStorage.setItem("transactions", JSON.stringify(newArray));
    
    // Set shouldReload to true to trigger a page reload
    setShouldReload(true);
  };

  // Render the Grid component
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Description</C.Th>
          <C.Th width={40}>Value</C.Th>
          <C.Th width={10} alignCenter>Type</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {items?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

// PropTypes for type-checking the props
Grid.propTypes = {
  items: PropTypes.array.isRequired, // Array as required
  setItems: PropTypes.func.isRequired, // Function and its required
};

// Export the Grid component
export default Grid;
