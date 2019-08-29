import React, { useState } from "react";


import { Route } from "react-router-dom";
import GoalList from './GoalList'
import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage'
import BudgetContainer from './BudgetContainer'
import ExpensesForm from './ExpensesForm'
import ExpensesContainer from './ExpensesContainer'
import GoalsContainer from './GoalContainer'



export default function AppRouter() {

    const [notes, setNotes] = useState([]);
    const [goals, setGoals] = useState([]);

    const addNewNote = note => {
        setNotes([...notes, note]);
    };
    const addNewGoal = goal => {
        setGoals([...goals, goal]);
    };

    
    return (
        <section>
            <Route exact path = '/' component = { LoginPage } />
            <Route path = '/ParentPage/welcome' component={ WelcomePage } />
            <Route path = '/ParentPage/welcomewelcome' component={ WelcomePage } />
            <Route path = '/ParentPage/budgetlist' render={props => (<BudgetContainer {...props} notesList={notes} addNewNote={addNewNote}/>) }/>
            <Route path = '/ParentPage/goallist' component={ GoalList } />
            <Route path = '/ParentPage/TrackExpenses' render={props => (<ExpensesContainer {...props} notesList={notes} addNewNote={addNewNote}/>) }/>

            
            <Route path='/ParentPage/goallist' render={props => (<GoalsContainer {...props} goalsList={goals} addNewGoal={addNewGoal} />)} />

        </section>

    )
};




