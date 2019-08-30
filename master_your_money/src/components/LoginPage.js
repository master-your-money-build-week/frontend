import React from "react";
import styled from 'styled-components';


const DIV1 = styled.div`
border: 2px solid #E8E8E8;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`


const SECTION = styled.section`
// display: flex;
// flex-direction: column;
width: 80%;
`



const INPUT = styled.input`
width: 100%;
border: 1px solid black;
height: 30px;
padding: 2%;
border-radius: 5px;
`
const DIVI = styled.div`
width: 200px;
margin: 2% 0 2% 0;

`

const BOTTOMDIV = styled.div`
display: flex;
flex-direction: row;
margin-left: 10%;
margin-top: 1%;
margin-bottom: 1%;
width: 80%;
`
const DIV4 = styled.div`
margin-right: 2%;
display: flex;
flex-direction: row;
align-content: center;
width: 12%;
justify-content: space-around;
`

const DIV5 = styled.div`
margin-right: 2%;

`

const BTN = styled.button`
margin-right: 2%;
background-color: #1DB954;
width: 7%;
height: 30px;
border-radius: 10%;
border: none;
color: white;
`
const LOWDIV = styled.div`
margin-left: 10%;

`
const LABEL = styled.label`
`

const SECTIONDIV = styled.div`
background: #E8E8E8;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`

export default function LoginPage() {
    return (
        <DIV1>

        <SECTION className="Login-page">
            <header>
                <h1>Welcome Back!</h1>
            </header>
            <DIVI>
                <INPUT className='inputfocus' type="text" placeholder='Phone or username'/>
            </DIVI>
            <DIVI>
                <INPUT className='inputfocus' type="text" placeholder='Password'/>
            </DIVI>
        </SECTION>

        <SECTIONDIV>

            <BOTTOMDIV>
                <BTN>
                    <a className='a-tag-style'href="/ParentPage/welcome" >Sign in</a>
                </BTN>
                <DIV4>
                    <input type="checkbox" />
                    <LABEL>Remember Me</LABEL>
                </DIV4>
                <DIV5>
                    <div className='forgot-user'>Forgot Username/Password?</div>
                </DIV5>
            </BOTTOMDIV>
            
            <LOWDIV>
                    <div>By clicking Sign in, you agree to our Terms and have read and aacknowledge our Privacy Statement</div>
                    <span>No account yet?</span>
                    <span>Create an account</span>
            </LOWDIV>
        </SECTIONDIV>

    
        </DIV1>

    );
}