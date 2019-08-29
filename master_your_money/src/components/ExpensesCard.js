import React from "react";

import styled from 'styled-components';

const H3 = styled.h3``


const ExpensesCard = props => {


    return (
        <div>
            {props.notesList.map(input => {
                return (
                    <div className="note" key = {input.id}>
                        <h3>Expenses: {input.expense}</h3>
                        <h3>Amount: {input.Amount}</h3>
                    

                        
                    </div>
                );
            })}

        </div>

    );
};

export default ExpensesCard;