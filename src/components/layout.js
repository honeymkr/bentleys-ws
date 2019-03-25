import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"


import "./base.css"

const Template = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            { name: "keywords", content: "sample, something" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Footer />
      </>
    )}
  />
)

export default Template
