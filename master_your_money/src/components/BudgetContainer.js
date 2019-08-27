import React from "react";

import styled from 'styled-components';
import BudgetCard from './BudgetCard'
import BudgetForm from "./BudgetForm";






const BudgetContainer = props => {


    return (
        <div>
            <BudgetForm addNewNote={props.addNewNote}/>
            <BudgetCard notesList={props.notesList} />

        </div>

    );
};

export default BudgetContainer;