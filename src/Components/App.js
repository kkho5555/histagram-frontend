import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    안녕하세요?
    <div>ddsf</div>
  </ThemeProvider>
);
