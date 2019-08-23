import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'
import './App.css';

function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <WelcomePage />
      {/* <AppRouter /> */}
    </main>
  );
}

export default App;
