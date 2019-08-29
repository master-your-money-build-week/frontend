import React from "react";
import styled from 'styled-components';
import ExpensesCard from './ExpensesCard'
import ExpensesForm from './ExpensesForm';

const DIV = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`




const ExpensesContainer = props => {


    return (
        <DIV>
            <ExpensesForm addNewNote = { props.addNewNote } />
            <ExpensesCard notesList = { props.notesList } />

        </DIV>

    );
};

export default ExpensesContainer;