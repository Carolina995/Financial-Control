// Grid/styles.js

// Import styled-components library
import styled from "styled-components";

// Styled component for the main table
export const Table = styled.table`
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
    `;

    // Styled component Thead, Tbody, Tr
    export const Thead = styled.thead``;
    export const Tbody = styled.tbody``;
    export const Tr = styled.tr``;
    

    // Styled component Th fields
    export const Th = styled.th`
        text-align: start;
        border-bottom: 2px solid #ccc;
        padding-bottom: 5px;
        font-family: 'Arvo', serif;
        font-family: 'Oswald', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Protest Revolution', sans-serif;
    
        text-align: ${(props) => (props.alignCenter ? "center" : "start")};
        width: ${(props) => (props.width ? props.width + "%" : "auto")};
        `;