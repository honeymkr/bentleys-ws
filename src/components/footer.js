import React, { Component } from "react"
import logoImg from "../images/logo.png"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"


const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  color: white;
  font-size:20px;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

const Hours = styled.p`
font-size: 17px;
`;

const Wrapper = styled.section`
  padding: 1em;
  text-align:center;
  
`;

export class Footer extends Component {
  render() {


  
    return (
   
    <Wrapper>
            <h3>Hours of Operation:</h3>
                <Hours>Monday through Friday 6:30am to 3:00pm </Hours>
                <Hours>Closed Tuesday </Hours>
                <Hours>Saturday and Sunday 7:30am to 1:30pm </Hours>

          

          </Wrapper>
    )
  }
}

export default Footer
