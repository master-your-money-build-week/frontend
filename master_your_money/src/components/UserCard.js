import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
width: 25%;
margin: 3%;
border-radius: 10px;
border: 2px solid gray;

border: 1px solid black;
`
const H4 = styled.h4`
font-size: .8rem;
`
const DIV3 = styled.div`
margin: 4%;
`
const H3 = styled.h3`
margin: 4%;
`

const IMG = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
`


const UserCard = ({avatar, first_name, last_name, email}) => {
    return (
        <DIV>
            <div>
                <IMG src={avatar} />
            </div>
            <div>
                <H3>{first_name} {last_name}</H3>
            </div>
            <DIV3>
                <H4>Email: {email}</H4>
            </DIV3>
        </DIV>

    )
}

export default UserCard;
