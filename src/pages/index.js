import React from 'react'

import Layout from '../components/layout'
import '../styles/index.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Github from "../images/github.inline.svg"
import Linkedin from '../images/linkedin.inline.svg'



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
          <p>Software Developer</p>
          <div>
          <a style={{ color: 'black', }} href='https://www.linkedin.com/in/prestondonohoo/' target='_blank' > <Linkedin style={{width: 30, height: 30, marginRight: 20, }} /></a>
          <a style={{ color: 'black', }} href='https://github.com/pdonohoo' target='_blank' ><Github style={{width: 30, height: 30}} />  </a>
          </div>

        </div>
      </Layout>
    </BackgroundImage>

  )
}

export default Index