import React, {useState, useEffect} from 'react';
import { Button } from 'semantic-ui-react';
import Goal from './Goal.js'
import GoalCard from './GoalCard'
import styled from 'styled-components';

const MAINDIV = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
justify-content: center;
width: 100%;
`

const DIV = styled.div`
margin: 3%;
`

const FORM = styled.form`
margin: 3%;


`
const INPUT = styled.input`
// margin: 3%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
height: 35px;
border: 2px solid navy;
border-radius: 7px;

`

const GoalList = props => {

    const [goal, setGoal] = useState({ totalGoal: ''})


    const changeHandler = event => {
        setGoal({ ...goal, [event.target.name]: event.target.value });
        }
    
    const submitForm = event => {
        event.preventDefault();
        console.log('hello')
        const newGoal = {
            ...goal,
            id: Date.now()
        };
        props.addNewGoal(newGoal);
    };
     

    return(
        <MAINDIV >
            <FORM>
                <INPUT
                    type="text"
                    name="totalGoal"
                    placeholder="Goals"
                    value={goal.totalGoal}
                    onChange={changeHandler}
                />

            </FORM>
        <DIV>
            <Button onClick={submitForm}>Add</Button>

        </DIV>
           

        </MAINDIV>
    );
}

export default GoalList;