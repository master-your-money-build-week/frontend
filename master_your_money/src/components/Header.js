import React from 'react';
import styled from 'styled-components';

const DIVSECTION = styled.div`
display: flex; 
flex-direction: row;
margin: auto;
justify-content: space-between;
`
const H1 = styled.h1`
margin-left: 2%;
`

const HEADERDIV = styled.div`
`
const SECTION = styled.div`
width: 110%;
`


export default function Header(){
    return(
        <DIVSECTION>
          
            <HEADERDIV className='header-background'>
                <section>
                    {/* <img</img> */}
                </section>
                <SECTION>
                    <H1>Master Your Money</H1>
                </SECTION>
        
            </HEADERDIV>
       
        </DIVSECTION>
    

  
    )
}
