import React, { Component } from "react"
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
  margin-left: 0.5rem;
  color: white;
  font-size:20px;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

const Hours = styled.p`
font-size: 17px;
`;

const Header = styled.h3`
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
                <Hours>Monday through Friday 6:30am to 3:00pm </Hours>
                <Hours>Closed Tuesday </Hours>
                <Hours>Saturday and Sunday 7:30am to 1:30pm </Hours>


                <TomatoButton > 
                <a href="mailTo:bentleysbakeryvt@gmail.com" target="_blank"
                target="_blank" 
                rel="noopener noreferrer"
                > 
                Email Us!
                    </a>
                </TomatoButton>

                <TomatoButton >
                <a href="https://www.facebook.com/Bentleys-Bakery-and-Cafe-159258157467790/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                > 
                      <span className="icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </span>
                    </a>
                </TomatoButton>
          </Wrapper>
    )
  }
}

export default Footer
