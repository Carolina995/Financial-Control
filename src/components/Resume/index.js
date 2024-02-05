// Resume/index.js

// Import the necessary dependences and styles
import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
 } from "react-icons/fa";// Import icons from the react-icons library

 // Define the Resume component
const Resume = ({ income, expense, total }) => {
    return (
     <C.Container>
        {/* Render ResumeItem components for income, expense, and total */}
        <ResumeItem 
        title="Entry" 
        Icon={FaRegArrowAltCircleUp} 
        value={income}/>
        <ResumeItem 
        title="Money out" 
        Icon={FaRegArrowAltCircleDown} 
        value={expense}/>
        <ResumeItem 
        title="Total" 
        Icon={FaDollarSign} 
        value={total} />
     </C.Container>
    );
};

// Export the resume component
export default Resume; 