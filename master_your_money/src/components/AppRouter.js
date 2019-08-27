import React, { useState } from "react";


import { Route } from "react-router-dom";
import GoalList from './GoalList'
import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage'
import BudgetContainer from './BudgetContainer'


export default function AppRouter() {

    const [notes, setNotes] = useState([]);

    const addNewNote = note => {
        setNotes([...notes, note]);
    };

    
    return (
        <section>
            <Route exact path = '/' component = { LoginPage } />
            <Route path = '/ParentPage/welcomewelcome' component={ WelcomePage } />
            <Route path='/ParentPage/budgetlist' render={props => (<BudgetContainer {...props} notesList={notes} addNewNote={addNewNote}/>) }/>
            <Route path = '/ParentPage/goallist' component={ GoalList } />
        </section>

    )
};




