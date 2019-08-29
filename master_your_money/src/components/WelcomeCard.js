import React from "react";
import styled from 'styled-components';
import home_page from './home_page1.jpg'
import UserList from "./UserList";
import UserCard from './UserCard'

const MAINIMG = styled.img`
margin-top: 3%;
width: 70%;
border-radius: 30px;
`

const HEAD = styled.div`
display: flex; 
justify-content: center;
`
const DIV = styled.div`
// border: 1px solid black;
display: flex;
flex-direction: column;
`


export default function WelcomCard() {
    return (
        <section className="welcome-page">
            <HEAD>
                <MAINIMG className='home-page-main-photo' src={home_page} alt='homepage img'></MAINIMG>
            </HEAD>
            <DIV>
                <UserList />
            </DIV>
        
            
        </section>
    );
}