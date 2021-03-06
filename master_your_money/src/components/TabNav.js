import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const TAB1 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const H4 = styled.h4`
color: black;
`
const DIV1 = styled.div`
height: 4px;
background-color:grey;
margin-bottom: 3%;
`

export default function TabNav(){

    return(
        <div>

        <TAB1>
            <NavLink className='H4' to='/ParentPage/welcome'>
                <H4>Home</H4>
            </NavLink>

            <NavLink className='H4' to='/ParentPage/budgetlist'>
                <H4>Create Budget</H4>
            </NavLink>

            <NavLink className='H4' to='/ParentPage/TrackExpenses'>
                <H4>Track Expenses</H4>
            </NavLink>

            <NavLink className='H4' to='/ParentPage/goallist'>
                <H4>Set Goals</H4>
            </NavLink>
        </TAB1>
        <DIV1>

        </DIV1>
        </div>

       
    )

}
