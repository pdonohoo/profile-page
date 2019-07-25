import React from 'react'

import Layout from '../components/layout'
import '../styles/index.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


const Index = () => {

  const data = useStaticQuery(graphql`
  query {
    imageSharp(fluid: {originalName: {eq: "sky-background.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
      }
    }
    site{
      siteMetadata{
        author
      }
    }
  }
  `)

  const imageData = data.imageSharp.fluid

  return (

    <BackgroundImage fluid={imageData} >
      <Layout>
        <div style={{ textAlign: 'center' }}>
          <h1>{data.site.siteMetadata.author}</h1>
          <p>Aspiring Software Developer</p>
        </div>
      </Layout>
    </BackgroundImage>

  )
}

export default Index