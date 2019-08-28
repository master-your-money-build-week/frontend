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




const BudgetForm = props => {
    const [number, setNote] = useState({ income: "", rent: "", insurance: "", utilities: "", phone: "", food: "" });

    const changeHandler = event => {
        // const newObj = {...note}
        // newObj[event.target.name] = event.target.value;
        setNote({ ...number, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        console.log('hello')
        const newNote = {
            ...number,
            id: Date.now()
        };
        props.addNewNote(newNote);
    };

    return (
        <DIV onSubmit={submitForm}>
            <H2>Lets Create a Budget!</H2>
            <H5>When entering your expenses, enter the monthly rate</H5>

        
            <FORMDIV >
                <DIV1>
                    <INPUT
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={number.phone}
                        onChange={changeHandler}
                />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="rent"
                        placeholder="Rent/Mortgage"
                        value={number.rent}
                        onChange={changeHandler}
                    />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="insurance"
                        placeholder="Insurance"
                        value={number.insurance}
                        onChange={changeHandler}
                    />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="utilities"
                        placeholder="Utilities"
                        value={number.utilities}
                        onChange={changeHandler}
                    />
                </DIV1>


                <DIV1>
                    <INPUT1
                        type="text"
                        name="income"
                        placeholder="Monthly Income"
                        value={number.income}
                        onChange={changeHandler}
                    />
                </DIV1>

                <DIV1>
                    <INPUT
                        type="text"
                        name="food"
                        placeholder="Food"
                        value={number.food}
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


