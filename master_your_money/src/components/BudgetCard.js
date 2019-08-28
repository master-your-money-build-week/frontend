import React from "react";

import styled from 'styled-components';

const H3 = styled.h3`

`


const BudgetCard = props => {


    return (
        <div>
            {props.notesList.map(number => {
                return (
                    <div className="note" key={number.id}>
                        <h2>Monthly Income: {number.income}</h2>

                        <H3>Food: {number.food}</H3>
                        <H3>Food: {number.insurance}</H3>
                        <H3>Food: {number.phone}</H3>
                        <H3>Food: {number.rent}</H3>
                        <H3>Food: {number.utilities}</H3>
                    

                        <h2>
                            {number.phone}
                        </h2>
                    </div>
                );
            })}

        </div>

    );
};

export default BudgetCard;