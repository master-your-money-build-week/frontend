import React from "react";
import { Route } from "react-router-dom";
import GoalList from './GoalList'
import WelcomePage from './WelcomePage'



export default function AppRouter() {
    return (
        <section>
            <Route exact path='/' component={ WelcomePage } />
            <Route path='/goallist' component={ GoalList } />
        </section>

    )
};