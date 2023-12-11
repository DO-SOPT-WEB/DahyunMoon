import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import FONT from "../assets/fonts//Mina-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
font-family: 'Mina';
src: url(${FONT});
}

*{
    margin: 0;
    padding: 0;
    text-align: center;
    justify-content: center;
}
body {
    background-color: ${theme.colors.white};
    display: flex;
    font-family: 'Mina';
}
button {
    border: none;
    font-family: 'Mina';
    
}

button:hover,
button:focus,
button:focus-visible {
    background-color: ${theme.colors.darkBlue};
}
`;

export default GlobalStyle;
