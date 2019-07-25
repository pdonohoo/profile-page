import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
 

const Footer = () => {

  const data = useStaticQuery(graphql`
  query {
    site{
      siteMetadata {
        author
      }
    }
  }
  `)

  return (
    <p className={footerStyles.footer} >Created by {data.site.siteMetadata.author} , © 2019 </p>
  )
}

export default Footer