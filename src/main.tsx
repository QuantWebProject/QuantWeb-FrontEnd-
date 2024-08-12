import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@/style/font.css";
import GlobalStyle from "@/style/global.ts";
import "@/style/scrollbar.css";
import theme from "@/style/theme.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
