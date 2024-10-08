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

    fieldset {
        border: none;
        margin: 0;
        padding: 0;
    }

    button {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background: inherit;
        font-family: inherit;
        cursor: pointer;
    }
    
`;

export default GlobalStyle;
