//Styles/global.js

// Import the necessary dependences and styles
import { createGlobalStyle } from "styled-components";

// Styled component Global
const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }
    body {
        
        font-family: 'Poppins', Sans-Serif;
        background-color: #f2f2f2;

    }
`;

// Export the Global component
export default Global;
