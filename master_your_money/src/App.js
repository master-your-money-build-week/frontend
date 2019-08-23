import React from 'react';
import styled from 'styled-components'
import './App.css';

import logo from './logo.svg';
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'
import TabNav from './components/TabNav'

const MAIN = styled.div`
width: 85vw;
min-height: 80vh;
max-width: 1024px;
margin: 35px auto;
background: #fff;
padding: 15px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`



function App() {
  return (
    <MAIN>
      <Header />
      <TabNav />
      {/* <WelcomePage /> */}
      {/* <AppRouter /> */}
    </MAIN>
  );
}

export default App;


