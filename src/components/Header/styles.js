// Header/ styles.js

// Import styled-components library
import styled from "styled-components";
import backgroundImage from "./images/euro.png";

// Styled component Container
export const Container = styled.div`
    height: 150px;
    text-align: center;
    background: url(${backgroundImage}) center center/cover no-repeat;
    `;
// Styled component Header
export const Header = styled.h1``;

// Styled component Title
export const Title = styled.div`
    padding-top: 20px;
    color: #fff;
    font-family: 'Arvo', serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Protest Revolution', sans-serif;
    
`;