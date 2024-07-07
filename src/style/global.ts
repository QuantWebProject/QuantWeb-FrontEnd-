import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Pretendard";
        font-weight: 400;
        color: ${({ theme }) => theme.color.gray10};
        margin: 0;
    } 
    h1 {
        margin: 0;
    }

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    
`;

export default GlobalStyle;
