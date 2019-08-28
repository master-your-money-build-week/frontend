import React from "react";
import styled from 'styled-components';


const MAINIMG = styled.img`
// width: 100%;
`

const HEAD = styled.div`
display: flex; 
justify-content: center;
`


export default function WelcomePage() {
    return (
        <section className="welcome-page">
            <HEAD>
                <MAINIMG className='home-page-main-photo' src='test.jpg'></MAINIMG>
            </HEAD>
        </section>
    );
}