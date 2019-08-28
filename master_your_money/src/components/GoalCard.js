import React from 'react'
import { Card, Progress } from 'semantic-ui-react';
import GoalList from './GoalList';

const Goal = (props) => {
    return(
        <div>
            {props.goalsList.map(goals => {
                return (
                    <div className="note" key={goals.id}>
                        <h2>Monthly Income: {goals.goal}</h2>
                    </div>
                );
            })}
        </div>
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