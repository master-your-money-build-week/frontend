import React from 'react';
import styled from 'styled-components';


const HEADERDIV = styled.div`
display: flex;
justify-content: center;
`
const SECTION1 = styled.div`
border-top: 3px solid lightgrey;
`


export default function Header(){
    return(
        <div>
            <HEADERDIV className='header-background'>
                <section>
                    {/* <img</img> */}
                </section>
                <section>
                    <h1>Master Your Money</h1>
                </section>
            </HEADERDIV>
            <SECTION1></SECTION1>
        </div>
    

  
    )
}
