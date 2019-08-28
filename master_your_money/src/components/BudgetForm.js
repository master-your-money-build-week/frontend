import React, { useState } from "react";
import styled from 'styled-components';

const DIV = styled.form`
border: 1px solid black;
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
justify-content: center;
`


const BUTTON = styled.button`
width: 30%;
height: 45px;
background-color: navy
border-radius: 5%;
border: 1px solid white;
color: white;
`










const BudgetForm = props => {
    const [note, setNote] = useState({ income: "", rent: "", insurance: "", utilities: "", phone: "", food: "" });

    const changeHandler = event => {
        // const newObj = {...note}
        // newObj[event.target.name] = event.target.value;
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        console.log('hello')
        const newNote = {
            ...note,
            id: Date.now()
        };
        props.addNewNote(newNote);
    };

    return (
        <DIV onSubmit={submitForm}>
            <h2>Lets Create a Budget!</h2>
            <h5>When entering your expenses, enter the monthly rate</h5>

        
            <FORMDIV >
                
                <DIV1>
                    <INPUT
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={note.phone}
                        onChange={changeHandler}
                />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="rent"
                        placeholder="Rent/Mortgage"
                        value={note.rent}
                        onChange={changeHandler}
                    />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="insurance"
                        placeholder="Insurance"
                        value={note.insurance}
                        onChange={changeHandler}
                    />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="utilities"
                        placeholder="Utilities"
                        value={note.utilities}
                        onChange={changeHandler}
                    />
                </DIV1>


                <DIV1>
                    <INPUT1
                        type="text"
                        name="income"
                        placeholder="Monthly Income"
                        value={note.income}
                        onChange={changeHandler}
                    />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="food"
                        placeholder="Food"
                        value={note.food}
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

export default BudgetForm;


