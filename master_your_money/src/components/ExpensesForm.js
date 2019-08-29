import React, { useState } from "react";
import styled from 'styled-components';

const DIV = styled.form`
border: 2px solid gray;
border-radius: 20px;
width: 45%;
`
const FORMDIV = styled.div`
display: flex;
flex-wrap: wrap-reverse;
justify-content: center;
`

const DIV1 = styled.label`
margin-top: 1%;
margin-bottom: 1%;
// margin-left: 2%;
margin-right: 0;

width: 40%;
`
const INPUT = styled.input`
border: 2px solid grey;
padding: 4%;
border-radius: 10px;

`
const INPUT1 = styled.input`
border: 2px solid green;
padding: 4%;
border-radius: 10px;
`


const BTN = styled.div`
margin: 2%;
display: flex;
justify-content: end;
`


const BUTTON = styled.button`
width: 30%;
height: 45px;
background-color: navy
border-radius: 5%;
border: 1px solid gray;
color: white;
border-radius: 10px;
`

const H2 = styled.h2`
margin: 2%;
`
const H5 = styled.h5`
margin: 2%;

`










const ExpensesForm = props => {
    const [input, setNote] = useState({ expense: "", cost: ""  });

    const changeHandler = event => {
        setNote({ ...input, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newNote = {
            ...input,
            id: Date.now()
        };
        props.addNewNote(newNote);
    };

    return (
        <DIV onSubmit={submitForm}>
            <H2>Lets Track Expenses</H2>

        
            <FORMDIV >
                
            <DIV1>
                    <INPUT
                        type="text"
                        name="expense"
                        placeholder="expense"
                        value={input.expense}
                        onChange={changeHandler}
                />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="Amount"
                        placeholder="Amount"
                        value={input.Amount}
                        onChange={changeHandler}
                    />
                </DIV1>
                
            </FORMDIV>

            <BTN>
                <BUTTON type="submit">Create</BUTTON>
            </BTN>





        </DIV>


    );
};

export default ExpensesForm;


