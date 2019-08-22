import React from 'react'

import Layout from '../components/layout'
import '../styles/index.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Github from "../images/github.inline.svg"
import Linkedin from '../images/linkedin.inline.svg'
import indexStyles from '../styles/index.module.scss'



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

    <BackgroundImage className={indexStyles.background} fluid={imageData}  >
      <Layout className={indexStyles.background}>
        <div style={{ textAlign: 'center', color: 'gray' }}>
          <h1>{data.site.siteMetadata.author}</h1>
          <h4 style={{padding:'0px 100px', color: 'gray' }}>Actively searching for Computer Programming, Software Development, Software Engineer, Jr. Developer position. I have recently graduated from Helio Training and have received a Certificate of Proficiency in Full Stack Web Development. I have built projects using the following: Javascript, React, MongoDB, GraphQL, REST, GatsbyJS, Monk, HTML, CSS. I am looking for a full time position in industry. </h4>
          <div>
          <a style={{ color: 'white', }} href='https://www.linkedin.com/in/prestondonohoo/' target='_blank' rel="noopener noreferrer" > <Linkedin style={{width: 30, height: 30, marginRight: 20, }} /></a>
          <a style={{ color: 'white', }} href='https://github.com/pdonohoo' target='_blank'  rel="noopener noreferrer" ><Github style={{width: 30, height: 30}} />  </a>
          </div>

        </div>
      </Layout>
    </BackgroundImage>

  )
}

export default Index