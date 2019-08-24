import React, {useState, useEffect} from 'react';
import { Button, Card, Icon, Image, Tab, Menu, Progress } from 'semantic-ui-react';
import Goal from './Goal.js'
import styled from 'styled-components';

const HEADERDIV = styled.div`
display: flex;
justify-content: center;
`

function GoalList (){

    const [goals, setGoals] = useState([])

    const handleSubmit = event => {
            // setGoals({ ...goals, })
            console.log(event.target)
        }
     

    return(
        <div>
            <HEADERDIV>
                <h1>Master Your Money</h1>
            </HEADERDIV>

            <Goal goals={goals}/>

            <Button onClick={handleSubmit}>Create new goal</Button>
            {/* map goals here */}
        </div>
    );
}

export default GoalList;