// Form/styles.js

// Import styled-components library
import styled from "styled-components";

// Styled component for the main container of Form
export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;
    
    @media (max-width: 750px) {
        display: grid;
    }
`;

// Styled component for the input content
export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;
// Styled component for labels
export const Label = styled.div`
    font-family: 'Arvo', serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Protest Revolution', sans-serif;
   `;

// Styled component for input fields
export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

// Styled component for the radio button group
export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
`;

// Styled component for the button
export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: green;
`;


