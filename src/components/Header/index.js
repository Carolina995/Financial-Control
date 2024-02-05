// Header/ index.js

// Import the necessary dependences and styles
import React from "react";
import * as C from "./styles";

// Define the Header component
const Header = () => {
    return (
        <C.Container>
            <C.Header>
              <C.Title>Financial Control</C.Title>
            </C.Header>
        </C.Container>
    );   
};

// Export the Header component
export default Header;