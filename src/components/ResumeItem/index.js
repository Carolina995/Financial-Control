// ResumeItem/index.js

// Import the necessary dependences and styles
import React from "react";
import * as C from "./styles";

// Define the ResumeItem component
const ResumeItem = ({ title, Icon, value}) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
        <C.Total>{value}</C.Total>
        </C.Container> 
    ); 
};

// Export the ResumeItem component
export default ResumeItem; 