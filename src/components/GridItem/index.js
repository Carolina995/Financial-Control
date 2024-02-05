// GridItem/ index.js

// Import the necessary dependences and styles
import React from "react";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa"; // Import icons from react-icons library

// Define the GridItem component
const GridItem = ({ item, onDelete }) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td> {/* Display the description in a table cell */}
            <C.Td>{item.amount}</C.Td> {/* Display the type (income/expense) in a table cell with an arrow icon */}
            <C.Td alignCenter>
            {item.expense ? (
                <FaRegArrowAltCircleUp color="green" />     
            ) : (
                <FaRegArrowAltCircleDown color="red" />
            )}
            </C.Td>
            <C.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />{/* Display a delete icon in a table cell and call onDelete when clicked */}
            </C.Td>
        </C.Tr>
    );
};

// Export the GridItem component
export default GridItem;