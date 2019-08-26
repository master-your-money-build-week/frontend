import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import TabNav from './components/TabNav'
import AppRouter from './components/AppRouter'

import './App.css';

function App() {
  return (
    <main>
      <Route path='/' component={ Header }/>

      <Route  path='/' component={ TabNav } />
      <AppRouter />

    </main>
  );
}

export default App;


