import React from "react";

import styled from 'styled-components';
import BudgetCard from './BudgetCard'
import BudgetForm from "./BudgetForm";

// const DIV = styled.div`
// display: flex;
// justify-content: center;
// flex-direction: column;
// // align-items: center;
// `




const BudgetContainer = props => {


    return (
        <div>
            <BudgetForm addNewNote={props.addNewNote}/>
            <BudgetCard notesList={props.notesList} />

        </div>

    );
};

export default BudgetContainer;