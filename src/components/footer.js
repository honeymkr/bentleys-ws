import React, { Component } from "react"
import styled from 'styled-components'


const Hours = styled.p`
font-size: 17px;
`;

const Header = styled.h3`
color:white;
`;

const Adress = styled.b`
color:white;
`;

const Wrapper = styled.section`
  padding: 1em;
  text-align:center;
  
`;

export class Footer extends Component {
  render() {


  
    return (
   
    <Wrapper>
            <Header>Hours of Operation:</Header>
                <Hours>Tuesday through Friday 6:30am to 1:30pm </Hours>
                <Hours>Closed Sunday and Monday </Hours>
                <Hours>Saturday 8am to 1:30pm </Hours>

               <Adress>Address: 20 Hill street, Danville VT 05828</Adress>

          </Wrapper>
    )
  }
}

export default Footer
