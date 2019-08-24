import React, {useState} from 'react';
import { Button, Card, Icon, Image, Tab, Menu, Progress } from 'semantic-ui-react';
import styled from 'styled-components';

const HEADERDIV = styled.div`
display: flex;
justify-content: center;
`

const CardDiv = styled.div`
display: flex;
justify-content: center
border: 1px solid gray
padding: 0.25em 1em;
`

function GoalList (){
    /**
     * This is going to be a tab
     * At the bottom is going to have a button to add new goal
     * for now: it's going to add a new blank card
     */

     const [goals, setGoals] = useState([])

    return(
        <div>
            <HEADERDIV className='header-background'>
                <h1>Master Your Money</h1>
            </HEADERDIV>

            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Save for next vacation</Card.Header>
                        <Progress percent={11}/>
                        {/* <Card.Meta>Co-Worker</Card.Meta>
                        <Card.Description>
                        Matthew is a pianist living in Nashville.
                        </Card.Description> */}
                    </Card.Content>
                </Card>
            </Card.Group>

            <Button >Create new goal</Button>
        </div>
    );
}

export default GoalList;