import React from 'react';
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const TAB1 = styled.div`
display: flex;
flex-direction: row;
`

const H4 = styled.h4`
margin: 4%;
`

export default function TabNav(){

    return(
        <TAB1>
            {/* <NavLink > */}
                <H4>Create Budget</H4>
            {/* </NavLink> */}

            {/* <NavLink > */}
                <H4>Track Expenses</H4>
            {/* </NavLink> */}

            {/* <NavLink > */}
                <H4>Set Goals</H4>
            {/* </NavLink> */}
        </TAB1>
       
    )

}