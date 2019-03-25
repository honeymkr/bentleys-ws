import React, { Component } from "react"
import Link from "gatsby-link"
import logoImg from "../images/logo.png"


export class Header extends Component {
  render() {
    return (
      <section className="header-wrapper">
        <div className="container">
         
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>
          
        </div>
      </section>
    )
  }
}

export default Header
