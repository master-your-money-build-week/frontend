import React from 'react'
import { Card, Progress } from 'semantic-ui-react';
import GoalList from './GoalList';
import styled from 'styled-components';

const DIV = styled.div`
margin: 3%;
`
const H2 = styled.h2`
margin: 0;
`
const H5 = styled.h5`
margin: 0;
padding: 3%;
`

const Goal = (props) => {
    return(
        <DIV>
            {props.goalsList.map(goals => {
                return (
                    <Card className="note" key={goals.id}>
                        <H2>Goal</H2>
                        <H5>{goals.totalGoal}</H5>
                    </Card>
                );
            })}
        </DIV>
    )
}

export default Goal;












// <div>
//     <h1>Goal</h1>
//     <Card.Group>
//         <Card>
//             <Card.Content>
//                 <Card.Header>{goals.goal}</Card.Header>
//                 <Progress percent={11} />
//             </Card.Content>
//         </Card>
//     </Card.Group>
// </div>