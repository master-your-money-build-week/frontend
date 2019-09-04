import React from "react";

import styled from 'styled-components';

const H3 = styled.h3`

`
const DIV = styled.div`
border: 2px solid gray;
border-radius: 10px;
margin-top: 5%;
padding: 2%;
width: 400px;
`

const BudgetCard = props => {


    return (
        <div>
            {props.notesList.map(number => {
                return (
                    <DIV className="note" key={number.id}>
                        <H3>Monthly Income: {number.income}</H3>

                        <H3>Food: {number.food}</H3>
                        <H3>Insurance: {number.insurance}</H3>
                        <H3>Phone: {number.phone}</H3>
                        <H3>Rent: {number.rent}</H3>
                        <H3>Utilities: {number.utilities}</H3>
                    </DIV>
                );
            })}

        </div>

    );
};

export default BudgetCard;