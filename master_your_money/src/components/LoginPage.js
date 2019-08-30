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
width: 80%;
`
const DIV4 = styled.div`
margin-right: 2%;
`

const DIV5 = styled.div`
margin-right: 2%;

`

const BTN = styled.button`
margin-right: 2%;

width: 100px;
`
const LOWDIV = styled.div`
margin-left: 10%;

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
                <INPUT type="text" placeholder='Phone or username'/>
            </DIVI>
            <DIVI>
                <INPUT type="text" placeholder='Password'/>
            </DIVI>
        </SECTION>

        <SECTIONDIV>

            <BOTTOMDIV>
                <BTN>
                    <a href="/ParentPage/welcome" >Sign in</a>
                </BTN>
                <DIV4>
                    <input type="checkbox" />
                    <label>Remember Me</label>
                </DIV4>
                <DIV5>
                    <div>Forgot Username/Password?</div>
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