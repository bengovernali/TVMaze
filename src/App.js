import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Login from "./Components/Login/Login";
import Search from "./Components/Body/Search";
import Admin from "./Components/Body/Admin";
import Profile from "./Components/Body/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <AppWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 12px;
  background-color: #64e9ee;
`;

export default App;
