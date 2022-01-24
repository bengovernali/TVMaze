import React from 'react'

import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
      <AppWrapper>
      <Header />
      <Body />
      <Footer />
    </AppWrapper>
    </>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 12px;
  background-color: #64e9ee;
`

export default App;
