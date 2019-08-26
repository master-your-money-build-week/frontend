import React from 'react';
import Header from './components/Header'
import GoalList from './components/GoalList'
import LoginPage from './components/LoginPage'
import TabNav from './components/TabNav'
import AppRouter from './components/AppRouter'

import './App.css';

function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <WelcomePage /> */}
      {/* <LoginPage /> */}
      {/* <AppRouter /> */}

      <TabNav />
      <AppRouter />

    </main>
  );
}

export default App;


