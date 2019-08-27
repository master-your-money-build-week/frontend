import React from "react";

import styled from 'styled-components';


const BudgetCard = props => {


    return (
        <div>
            {props.notesList.map(note => {
                return (
                    <div className="note" key={note.id}>
                        
                        <h2>
                            {note.phone}
                        </h2>
                    </div>
                );
            })}

        </div>

    );
};

export default BudgetCard;