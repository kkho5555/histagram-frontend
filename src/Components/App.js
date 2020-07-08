import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 30px auto 0;
  max-width: 935px;
  padding-bottom: 44px;
  width: 100%;
`;
export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider>
  );
};
