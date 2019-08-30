import React from "react";
import styled from 'styled-components';
import home_page from './home_page1.jpg'
import UserList from "./UserList";
import UserCard from './UserCard'

const MAINIMG = styled.img`
margin-top: 3%;
width: 45%;
border-radius: 10px;
`

const HEAD = styled.div`
display: flex; 
justify-content: space-around;
`
const DIV = styled.div`
// border: 1px solid black;
display: flex;
flex-direction: column;
`
const TITLE = styled.div`
margin-top: 3%;
// border: 1px solid black;
padding: 1%;
margin-bottom: 2%;
width: 45%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const H3 = styled.h4`
font-size: 1rem;
margin: 1%;
`
const H2 = styled.h2`
margin: 1%;
`

export default function WelcomCard() {
    return (
        <section className="welcome-page">
            <HEAD>
                <TITLE>
                    <H2>Welcome!</H2>
                        <H3> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum passages, and more 
                        recently with desktop
                        </H3>
                    <H2>New Updates</H2>
                        <H3>An unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop
                        </H3>
                    <H2>Future Additions</H2>
                        <H3>It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                        </H3>
                </TITLE>
                <MAINIMG className='home-page-main-photo' src={home_page} alt='homepage img'></MAINIMG>
            </HEAD>
            <DIV>
                <UserList />
            </DIV>
        
            
        </section>
    );
}