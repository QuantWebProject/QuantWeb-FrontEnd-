import { createGlobalStyle } from "styled-components";

const GlobalFont = createGlobalStyle`
    @font-face {
      font-family: Pretendard;
      src: url(src/assets/fonts/Pretendard-Regular.woff2);
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: Pretendard;
      src: url(src/assets/fonts/Pretendard-Medium.woff2);
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: Pretendard;
      src: url(src/assets/fonts/Pretendard-Bold.woff2);
      font-weight: 700;
      font-style: normal;
    }
`;

export default GlobalFont;
