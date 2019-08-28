import React from "react";

import styled from 'styled-components';
import GoalCard from "./GoalCard";
import GoalList from "./GoalList";

const DIV = styled.div`

`



const GoalContainer = props => {


    return (
        <DIV>
            <GoalList addNewGoal={props.addNewGoal}/>
            <GoalCard goalsList={props.goalsList}/>
        </DIV>

    );
};

export default GoalContainer;