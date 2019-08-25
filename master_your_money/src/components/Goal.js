import React from 'react'
import { Button, Card, Icon, Image, Tab, Menu, Progress } from 'semantic-ui-react';

const Goal = (props) => {
    return(
        <div>
            <h1>Goal</h1>               
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Header>Save for next vacation</Card.Header>
                            <Progress percent={11}/>
                        </Card.Content>
                    </Card>
                </Card.Group> 
        </div>
    )
}

export default Goal;