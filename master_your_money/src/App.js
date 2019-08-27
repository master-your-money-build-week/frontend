import React, { useState } from "react";

import { Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import TabNav from './components/TabNav'
import AppRouter from './components/AppRouter'

import './App.css';

function App() {


  return (
    <main>
      <Route path='/ParentPage' component={ Header }/>
      <Route  path='/ParentPage' component={ TabNav } />
      <AppRouter />

    </main>
  );
}

export default App;


