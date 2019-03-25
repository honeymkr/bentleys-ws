import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import Template from "../components/layout"
import { Link, graphql } from "gatsby"

import styled from 'styled-components'


const Paragraph = styled.p`
  font-size: 15px;
  text-align: left;
`;

const Wrapper = styled.section`
  padding: 1em;
`;

class indexPage extends React.Component {
  render() {
    const siteName = get(this, "props.data.contenfulSite.bizName");
    const siteAbout = get(this, "props.data.contentfulSite.bizAbout.bizAbout");
    return (
      <Template>
        <Helmet title={siteName} />

        <Wrapper>
                <Paragraph>{siteAbout}</Paragraph>
          </Wrapper>
      </Template>
    )
  }
}

export default indexPage

export const pageQuery = graphql`
{
  contentfulSite{ 
    bizName
      bizLogo {
      file{
        url
      }
    }
    bizEmail
    bizPhone
    bizAbout {
      id
      bizAbout
    }
    bizAddress {
      lon
      lat
    }
    
  }
}
`

