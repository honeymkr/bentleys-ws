import React, { Component } from "react"
import Link from "gatsby-link"
import logoImg from "../images/logo.png"
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


export class Header extends Component {
  render() {
    return (
      <section className="header-wrapper">
        <div className="container">
         
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>

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
          
        </div>
      </section>
    )
  }
}

export default Header
