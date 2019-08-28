import React, {useState, useEffect} from 'react';
import { Button } from 'semantic-ui-react';
import GoalCard from './GoalCard'
import styled from 'styled-components';

// const HEADERDIV = styled.div`
// display: flex;
// justify-content: center;
// `


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
        <div >
            <form>
                <input
                    type="text"
                    name="totalGoal"
                    placeholder="Goals"
                    value={goal.totalGoal}
                    onChange={changeHandler}
                />

            </form>

            <button onClick={submitForm}>Add</button>
           

        </div>
    );
}

export default GoalList;