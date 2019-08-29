import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
width: 25%;
border: 1px solid black;
`



const UserCard = ({avatar}) => {
    return (
        <DIV>
           <img src={avatar}/>
        </DIV>

    )
}

export default UserCard;
