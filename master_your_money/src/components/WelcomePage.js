import React from "react";
import styled from 'styled-components';


const MAINIMG = styled.img`
width: 40%;`


export default function WelcomePage() {
    return (
        <section className="welcome-page">
            <header>
                <MAINIMG className='home-page-main-photo' src='home-page.jpg'></MAINIMG>
            </header>
        </section>
    );
}