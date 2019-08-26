import React from "react";
import { Route } from "react-router-dom";
import GoalList from './GoalList'
import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage'



export default function AppRouter() {
    return (
        <section>
            <Route exact path = '/' component = { LoginPage } />
            <Route path = '/ParentPage/welcomewelcome' component={ WelcomePage } />
            <Route path = '/ParentPage/goallist' component={ GoalList } />
            
        </section>

    )
};




