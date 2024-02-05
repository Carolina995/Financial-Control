// GridItem/styles.js

// Import styled-components library
import styled from "styled-components";

// Styled component table row
export const Tr = styled.tr`
    font-family: 'Arvo', serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Protest Revolution', sans-serif;
   `;

// Styled component table cell
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;
    
    svg{
        width: 18px;
        height: 18px;
    }
    `;