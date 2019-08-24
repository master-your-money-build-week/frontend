import React, {useState} from 'react';
import { Button, Card, Icon, Image, Tab, Menu, Progress } from 'semantic-ui-react';
import Goal from './Goal.js'
import styled from 'styled-components';

const HEADERDIV = styled.div`
display: flex;
justify-content: center;
`

function GoalList (){

     const [goals, setGoals] = useState([])

    return(
        <div>
            <HEADERDIV>
                <h1>Master Your Money</h1>
            </HEADERDIV>

            <Goal />

            <Button >Create new goal</Button>
        </div>
    );
}

export default GoalList;