import React from 'react'

import Layout from '../components/layout'
import { graphql} from 'gatsby'
import blogsStyles from '../template/blogs.module.scss'


export const query = graphql`
query ( $slug: String!) {
  markdownRemark ( fields: {slug: {eq: $slug}}) {
    frontmatter{
      title
      date
    }
    html
  }
}
`

const Blogs = (props) => {

  return (
    <Layout >
      <div className={blogsStyles.layout}>

        <h1> {props.data.markdownRemark.frontmatter.title} </h1>
        <h4>
          {props.data.markdownRemark.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
          
        </div>
      </div>
    </Layout>
  )
}

export default Blogs